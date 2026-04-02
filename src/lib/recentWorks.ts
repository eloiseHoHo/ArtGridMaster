export interface RecentLayout {
  rows: number;
  cols: number;
  gap: number;
  aspectW: number;
  aspectH: number;
  bgColor: string;
  cornerRadius: number;
  label: string;
  timestamp: number;
}

const STORAGE_KEY = "photogrid-recent-layouts";
const MAX_ITEMS = 6;

export function getRecentLayouts(): RecentLayout[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveRecentLayout(layout: Omit<RecentLayout, "timestamp">): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getRecentLayouts();
    const entry: RecentLayout = { ...layout, timestamp: Date.now() };
    // Remove duplicate (same rows/cols/aspect)
    const filtered = existing.filter(
      (l) => !(l.rows === layout.rows && l.cols === layout.cols && l.aspectW === layout.aspectW && l.aspectH === layout.aspectH)
    );
    const updated = [entry, ...filtered].slice(0, MAX_ITEMS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // ignore
  }
}

export function clearRecentLayouts(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
