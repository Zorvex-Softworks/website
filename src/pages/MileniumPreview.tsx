import * as React from "react";
import { MileniumWindow } from "@/components/milenium/MileniumWindow";
import {
  DEFAULT_MILENIUM_GAME,
  MILENIUM_PREVIEW_DATASETS,
} from "@/data/milenium";

const DEFAULT_MODE =
  MILENIUM_PREVIEW_DATASETS[DEFAULT_MILENIUM_GAME].defaultMode;

export default function MileniumPreview() {
  const [game, setGame] = React.useState<string>(DEFAULT_MILENIUM_GAME);
  const [mode, setMode] = React.useState<string>(DEFAULT_MODE);
  const preview =
    MILENIUM_PREVIEW_DATASETS[game] ??
    MILENIUM_PREVIEW_DATASETS[DEFAULT_MILENIUM_GAME];
  const modes = Object.keys(preview.datasets);
  const config = preview.datasets[mode] ?? preview.datasets[preview.defaultMode];

  React.useEffect(() => {
    setMode(preview.defaultMode);
  }, [game, preview.defaultMode]);

  return (
    <main className="min-h-screen bg-[#0e0e10] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[980px] flex-col items-center justify-center gap-6 px-6 py-10">
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-[#f5f5f5]">
          <label className="flex items-center gap-3">
            <span>Game</span>
            <select
              value={game}
              onChange={(event) => setGame(event.target.value)}
              className="h-10 rounded-md border border-[#242425] bg-[#161618] px-3 text-sm text-white outline-none"
            >
              {Object.keys(MILENIUM_PREVIEW_DATASETS).map((entry) => (
                <option key={entry} value={entry}>
                  {entry}
                </option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-3">
            <span>Mode</span>
            <select
              value={mode}
              onChange={(event) => setMode(event.target.value)}
              className="h-10 rounded-md border border-[#242425] bg-[#161618] px-3 text-sm text-white outline-none"
            >
              {modes.map((entry) => (
                <option key={entry} value={entry}>
                  {entry}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="w-[700px] min-w-[700px]">
          <MileniumWindow {...config} />
        </div>
      </div>
    </main>
  );
}
