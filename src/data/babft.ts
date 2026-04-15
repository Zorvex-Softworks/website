import type {
  MileniumConfig,
  SectionDef,
  UIEl,
} from "@/components/milenium/MileniumWindow";
import {
  Blinds,
  CloudFog,
  Cog,
  Eye,
  Globe,
  Lightbulb,
  Package,
  PersonStanding,
  Play,
  RefreshCcw,
  ShieldOff,
  ShoppingCart,
  Sparkles,
  User,
} from "lucide-react";

function estimateSectionSize(elements: UIEl[]): number {
  const total = elements.reduce((sum, element) => {
    switch (element.type) {
      case "slider":
      case "textbox":
      case "number":
      case "keybind":
      case "dropdown":
      case "color":
        return sum + 1.75;
      case "button":
        return sum + 1.2;
      case "divider":
      case "label":
        return sum + 0.7;
      default:
        return sum + 1;
    }
  }, 0);

  return Number(Math.max(total, 1).toFixed(2));
}

function section(definition: Omit<SectionDef, "size"> & { size?: number }): SectionDef {
  return {
    ...definition,
    size: definition.size ?? estimateSectionSize(definition.elements),
  };
}

function mainGameSections(): SectionDef[] {
  return [
    section({
      name: "Main",
      icon: Blinds,
      column: "left",
      elements: [
        { type: "toggle", text: "Auto Claim", value: false },
        { type: "toggle", text: "Bypass Isolation", value: false },
        { type: "toggle", text: "Anti Water Damage", value: false },
        { type: "toggle", text: "Infinite Jetpack Fuel", value: false },
      ],
    }),
    section({
      name: "Chest",
      icon: ShoppingCart,
      column: "right",
      elements: [
        { type: "toggle", text: "Auto Buy Chest", value: false },
        { type: "dropdown", text: "Selected Chest", value: "Common", width: 160 },
        { type: "textbox", text: "Chest Buy Amount", value: "1" },
      ],
    }),
  ];
}

function farmSections(): SectionDef[] {
  return [
    section({
      name: "Farm",
      icon: RefreshCcw,
      column: "left",
      elements: [
        { type: "toggle", text: "Auto Farm", value: false },
        { type: "slider", text: "Stage Dwell", value: 1.6, min: 0.5, max: 5, suffix: "s" },
      ],
    }),
    section({
      name: "Motorboat",
      icon: Package,
      column: "right",
      elements: [
        { type: "number", text: "Boat Speed", value: 0 },
        { type: "textbox", text: "Max Thrust Force", value: "0" },
        { type: "textbox", text: "Max Turning Force", value: "0" },
        { type: "textbox", text: "Turning Speed", value: "0" },
      ],
    }),
  ];
}

function questSections(): SectionDef[] {
  return [
    section({
      name: "Quest",
      icon: Sparkles,
      column: "left",
      elements: [
        { type: "dropdown", text: "Selected Quest", value: "Cloud", width: 160 },
        { type: "toggle", text: "Quest Completer", value: false },
      ],
    }),
  ];
}

function buildSections(): SectionDef[] {
  return [
    section({
      name: "Blueprints",
      icon: Package,
      column: "left",
      elements: [
        { type: "toggle", text: "Preview Build", value: false },
        { type: "dropdown", text: "Selected Build File", value: "fortress.json", width: 180 },
        { type: "dropdown", text: "Selected Public Build", value: "epstein_island.json", width: 180 },
        { type: "textbox", text: "Export Name", value: "my_build" },
        { type: "textbox", text: "Copy Build Player", value: "blue (1 blocks)" },
      ],
    }),
  ];
}

function playerSections(): SectionDef[] {
  return [
    section({
      name: "Movement",
      icon: PersonStanding,
      column: "left",
      elements: [
        { type: "slider", text: "Walk Speed", value: 16, min: 0, max: 200 },
        { type: "slider", text: "Jump Power", value: 50, min: 0, max: 500 },
        { type: "slider", text: "Jump Height", value: 7.2, min: 0, max: 100 },
      ],
    }),
    section({
      name: "Utility",
      icon: User,
      column: "right",
      elements: [
        { type: "toggle", text: "Infinite Jump", value: false },
        { type: "toggle", text: "Anti AFK", value: false },
      ],
    }),
  ];
}

function universalPlayerSections(): SectionDef[] {
  return [
    section({
      name: "Player",
      icon: User,
      column: "left",
      elements: [
        { type: "slider", text: "Walk Speed", value: 16, min: 0, max: 200 },
        { type: "slider", text: "Jump Power", value: 50, min: 0, max: 500 },
        { type: "slider", text: "Jump Height", value: 7.2, min: 0, max: 100 },
        { type: "toggle", text: "Infinite Jump", value: false },
        { type: "toggle", text: "Anti AFK", value: false },
      ],
    }),
  ];
}

function universalCombatSections(): SectionDef[] {
  return [
    section({
      name: "Combat",
      icon: ShieldOff,
      column: "left",
      elements: [
        { type: "label", text: "No combat utilities were present in the extracted BABFT tabs.", muted: true },
      ],
    }),
  ];
}

function lightingSections(): SectionDef[] {
  return [
    section({
      name: "Lighting",
      icon: Lightbulb,
      column: "left",
      elements: [
        { type: "toggle", text: "Force", value: false },
        { type: "textbox", text: "Technology", value: "ShadowMap" },
        { type: "divider", text: "Colors" },
        { type: "color", text: "Ambient", value: "#5066af" },
        { type: "color", text: "Outdoor Ambient", value: "#c8c8c8" },
        { type: "color", text: "Shift Bottom", value: "#000000" },
        { type: "color", text: "Shift Top", value: "#000000" },
        { type: "color", text: "Fog Color", value: "#bfbfbf" },
        { type: "divider", text: "Time & Fog" },
        { type: "slider", text: "Clock Time", value: 14, min: 0, max: 23 },
        { type: "slider", text: "Geographic Latitude", value: 41.7, min: 0, max: 90 },
        { type: "slider", text: "Exposure Compensation", value: 0, min: -5, max: 5 },
        { type: "slider", text: "Fog Start", value: 0, min: 0, max: 50000 },
        { type: "slider", text: "Fog End", value: 100000, min: 0, max: 100000 },
      ],
    }),
  ];
}

function environmentSections(): SectionDef[] {
  return [
    section({
      name: "Atmosphere",
      icon: CloudFog,
      column: "left",
      elements: [
        { type: "toggle", text: "Force", value: false },
        { type: "slider", text: "Density", value: 0.4, min: 0, max: 1 },
        { type: "slider", text: "Offset", value: 0, min: 0, max: 1 },
        { type: "slider", text: "Glare", value: 0, min: 0, max: 10 },
        { type: "slider", text: "Haze", value: 0.5, min: 0, max: 10 },
      ],
    }),
    section({
      name: "Skybox",
      icon: Package,
      column: "right",
      elements: [
        { type: "toggle", text: "Force", value: false },
        { type: "slider", text: "Star Count", value: 3000, min: 0, max: 5000 },
        { type: "slider", text: "Sun Angular Size", value: 11, min: 0, max: 60 },
        { type: "slider", text: "Moon Angular Size", value: 11, min: 0, max: 60 },
        { type: "textbox", text: "Sun Texture", value: "rbxasset://sky/sun.jpg" },
        { type: "textbox", text: "Moon Texture", value: "rbxasset://sky/moon.jpg" },
      ],
    }),
  ];
}

function effectSections(): SectionDef[] {
  return [
    section({
      name: "Color Grading",
      icon: Sparkles,
      column: "left",
      elements: [
        { type: "toggle", text: "Force", value: false },
        { type: "toggle", text: "Enabled", value: true },
        { type: "color", text: "Tint Color", value: "#ffffff" },
      ],
    }),
  ];
}

function settingsSections(): SectionDef[] {
  return [
    section({
      name: "Keybinds",
      icon: Cog,
      column: "left",
      elements: [
        { type: "keybind", text: "UI Keybind", value: "RightControl" },
        { type: "keybind", text: "Quick Modifier", value: "LeftAlt" },
      ],
    }),
    section({
      name: "Session",
      icon: User,
      column: "right",
      elements: [
        { type: "label", text: "Window Title: lumin.rest" },
        { type: "label", text: "Player Count: 5" },
        { type: "label", text: "Menu Enabled: true" },
      ],
    }),
  ];
}

export const BABFT_MAIN: MileniumConfig = {
  gameName: "Build A Boat For Treasure",
  placeId: 537413528,
  tabs: [
    {
      name: "Main",
      icon: Play,
      order: 1010,
      pages: [
        { name: "Game", order: 1, sections: mainGameSections() },
        { name: "Farm", order: 2, sections: farmSections() },
        { name: "Quests", order: 3, sections: questSections() },
      ],
    },
    {
      name: "Build [ BETA ]",
      icon: Package,
      order: 1015,
      pages: [{ name: "Main", order: 1, sections: buildSections() }],
    },
    {
      name: "Player",
      icon: PersonStanding,
      order: 1020,
      pages: [{ name: "Main", order: 1, sections: playerSections() }],
    },
    { name: "Universal", order: 2000, isSeparator: true, pages: [] },
    {
      name: "Universal",
      icon: Globe,
      order: 2001,
      pages: [
        { name: "Player", order: 1, sections: universalPlayerSections() },
        { name: "Combat", order: 2, sections: universalCombatSections() },
      ],
    },
    {
      name: "Visuals",
      icon: Eye,
      order: 2010,
      pages: [
        { name: "Lighting", order: 1, sections: lightingSections() },
        { name: "Environment", order: 2, sections: environmentSections() },
        { name: "Effects", order: 3, sections: effectSections() },
      ],
    },
    {
      name: "Settings",
      icon: Cog,
      order: 2100,
      pages: [{ name: "Main", order: 1, sections: settingsSections() }],
    },
  ],
};

export const BABFT_DATASETS: Record<string, MileniumConfig> = {
  Main: BABFT_MAIN,
};