/**
 * Bridge between the CE Oh! webview and the Devvit Reddit parent frame.
 * All functions are no-ops when the game runs outside a Reddit webview.
 *
 * Message flow:
 *   webview → Devvit:  window.parent.postMessage(msg, '*')
 *   Devvit → webview:  window 'message' event, wrapped as { type: 'devvit-message', data: inner }
 */

export interface DevvitInitData {
  username: string;
  weekSeed: number;
  bestClimb: number;
  bestSteward: number;
}

export interface DevvitScoreData {
  climbScore: number;
  stewardScore: number;
  lit: number;
}

export function isInDevvit(): boolean {
  try {
    return window !== window.parent;
  } catch {
    return false;
  }
}

export function sendWebViewReady(): void {
  window.parent.postMessage({ type: "webViewReady" }, "*");
}

export function sendGameComplete(data: DevvitScoreData): void {
  window.parent.postMessage({ type: "gameComplete", data }, "*");
}

/** Registers a handler for the Devvit initialData message. Returns a cleanup function. */
export function onDevvitInit(handler: (data: DevvitInitData) => void): () => void {
  const listener = (event: MessageEvent) => {
    // Devvit wraps inbound messages as: { type: 'devvit-message', data: { type, data } }
    const inner =
      event.data?.type === "devvit-message" ? (event.data.data as unknown) : event.data;
    if (
      inner !== null &&
      typeof inner === "object" &&
      (inner as Record<string, unknown>).type === "initialData"
    ) {
      handler((inner as { type: string; data: DevvitInitData }).data);
    }
  };
  window.addEventListener("message", listener);
  return () => window.removeEventListener("message", listener);
}
