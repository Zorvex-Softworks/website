import type { MileniumConfig } from "@/components/milenium/MileniumWindow";
import { BABFT_DATASETS } from "@/data/babft";
import { DRILLFORBRAINROTS_DATASETS } from "@/data/drillforbrainrots";
import { SWINGOBBYFORBRAINROT_DATASETS } from "@/data/swingaobbyforbrainrots";


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
  "Drill For Brainrots": {
    defaultMode: "Main",
    datasets: DRILLFORBRAINROTS_DATASETS,
  },
  "Swing Obby For Brainrot": {
    defaultMode: "Main",
    datasets: SWINGOBBYFORBRAINROT_DATASETS,
  },
};