/**
 * CE Oh! — Devvit app entry point.
 *
 * This file runs on Reddit's servers (not in the browser). It defines:
 *  - A custom post type with a Blocks launch screen and the CE Oh! webview.
 *  - A moderator menu item to create the weekly post.
 *  - Redis persistence for per-user best scores.
 *
 * The webview itself is the compiled CE Oh! React app (devvit/webroot/index.html),
 * built with `npm run build:game` from the devvit/ directory.
 */

import { Devvit, useState } from "@devvit/public-api";

Devvit.configure({
  redditAPI: true,
  redis: true,
});

// --- Seed helpers (mirrors src/engine/rng.ts isoWeekString + hashStringToSeed) ----------

function isoWeekString(date: Date = new Date()): string {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
}

function hashStringToSeed(str: string): number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  h = Math.imul(h ^ (h >>> 16), 2246822507);
  h = Math.imul(h ^ (h >>> 13), 3266489909);
  return (h ^ (h >>> 16)) >>> 0;
}

function weeklySeed(): number {
  return hashStringToSeed(isoWeekString());
}

function weekLabel(): string {
  const w = isoWeekString();
  return `Week ${w.slice(w.indexOf("W") + 1)}`;
}

// --- Message types -----------------------------------------------------------------------

type WebViewMsg =
  | { type: "webViewReady" }
  | { type: "gameComplete"; data: { climbScore: number; stewardScore: number; lit: number } };

type DevvitMsg = {
  type: "initialData";
  data: { username: string; weekSeed: number; bestClimb: number; bestSteward: number };
};

// --- Custom post type -------------------------------------------------------------------

Devvit.addCustomPostType({
  name: "CE Oh! Weekly",
  height: "tall",

  render: (context) => {
    const [username] = useState<string>(async () => {
      return (await context.reddit.getCurrentUsername()) ?? "anonymous";
    });

    const [bestClimb, setBestClimb] = useState<number>(async () => {
      const val = await context.redis.get(`ceoh:climb:${context.postId}:${username}`);
      return val ? parseInt(val, 10) : 0;
    });

    const [bestSteward, setBestSteward] = useState<number>(async () => {
      const val = await context.redis.get(`ceoh:steward:${context.postId}:${username}`);
      return val ? parseInt(val, 10) : 0;
    });

    const webView = context.useWebView<WebViewMsg, DevvitMsg>({
      url: "index.html",

      onMessage: async (msg) => {
        if (msg.type === "webViewReady") {
          // Send the weekly seed and user context so the game initializes correctly.
          webView.postMessage({
            type: "initialData",
            data: {
              username: username ?? "anonymous",
              weekSeed: weeklySeed(),
              bestClimb: bestClimb ?? 0,
              bestSteward: bestSteward ?? 0,
            },
          });
          return;
        }

        if (msg.type === "gameComplete") {
          const { climbScore, stewardScore } = msg.data;

          if (climbScore > (bestClimb ?? 0)) {
            await context.redis.set(
              `ceoh:climb:${context.postId}:${username}`,
              String(climbScore),
            );
            setBestClimb(climbScore);
          }
          if (stewardScore > (bestSteward ?? 0)) {
            await context.redis.set(
              `ceoh:steward:${context.postId}:${username}`,
              String(stewardScore),
            );
            setBestSteward(stewardScore);
          }

          context.ui.showToast({
            text: `Saved — Climb: ${climbScore} / Steward: ${stewardScore}`,
          });
        }
      },
    });

    return (
      <vstack alignment="center middle" height="100%" gap="medium" padding="medium">
        <text size="xxlarge" weight="bold" color="white">
          CE Oh!
        </text>
        <text size="medium" color="white">
          {weekLabel()} · The Climb
        </text>

        <spacer size="large" />

        <button onPress={() => webView.mount()} appearance="primary" size="large">
          Play This Week
        </button>

        {(bestClimb ?? 0) > 0 && (
          <>
            <spacer size="small" />
            <text size="small" color="white">
              Your best — Climb: {bestClimb} / Steward: {bestSteward}
            </text>
          </>
        )}
      </vstack>
    );
  },
});

// --- Moderator menu item ---------------------------------------------------------------

Devvit.addMenuItem({
  label: "Create CE Oh! weekly post",
  location: "subreddit",
  forUserType: "moderator",
  onPress: async (_, context) => {
    const subreddit = await context.reddit.getCurrentSubreddit();
    const post = await context.reddit.submitPost({
      title: `CE Oh! — ${weekLabel()} — The Climb`,
      subredditName: subreddit.name,
      preview: (
        <vstack alignment="center middle" height="100%">
          <text size="large">Loading CE Oh!…</text>
        </vstack>
      ),
    });
    context.ui.showToast({ text: "Weekly post created!" });
    context.ui.navigateTo(post);
  },
});

export default Devvit;
