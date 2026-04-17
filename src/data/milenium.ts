import type { MileniumConfig } from "@/components/milenium/MileniumWindow";
import { BABFT_DATASETS } from "@/data/babft";


export const DEFAULT_MILENIUM_GAME = "Build A Boat For Treasure";

export const MILENIUM_PREVIEW_DATASETS: Record<
  string,
  {
    defaultMode: string;
    datasets: Record<string, MileniumConfig>;
  }
> = {
  "Build A Boat For Treasure": {
    defaultMode: "Main",
    datasets: BABFT_DATASETS,
  },
};