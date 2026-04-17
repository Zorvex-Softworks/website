import type {
  MileniumConfig,
  SectionDef,
  UIEl,
} from "@/components/milenium/MileniumWindow";
import {
  Anchor,
  BookOpen,
  Bug,
  Cog,
  Eye,
  Globe,
  Hammer,
  Home,
  Lightbulb,
  Package,
  Plug2,
  RefreshCcw,
  ShieldOff,
  ShoppingCart,
  Sparkles,
  User,
  Zap,
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

// ─── Main → Main ──────────────────────────────────────────────────────────────

function motorboatSections(): SectionDef[] {
  return [
    section({
      name: "Motorboat Tuning",
      icon: Anchor,
      column: "left",
      elements: [
        { type: "slider",  text: "Motorboat Speed",  value: 50,            min: 0, max: 250 },
        { type: "textbox", text: "Turning Speed",     value: "45",          placeholder: "45" },
        { type: "textbox", text: "Max Thrust Force",  value: "10000000000", placeholder: "10000000000" },
        { type: "textbox", text: "Max Turning Force", value: "5",           placeholder: "5" },
      ],
    }),
  ];
}

function utilitiesSections(): SectionDef[] {
  return [
    section({
      name: "Utilities",
      icon: Sparkles,
      column: "right",
      elements: [
        { type: "dropdown", text: "Quest", value: "1 - Cloud", width: 180 },
        { type: "button",   text: "Start Selected Quest" },
        { type: "button",   text: "Stop Active Quest" },
        { type: "button",   text: "Complete Active Quest Step" },
        { type: "button",   text: "Teleport To Quest Objective" },
        { type: "button",   text: "Interact Quest Objective" },
        { type: "toggle",   text: "Auto Complete Quest Step", value: false },
        { type: "slider",   text: "Quest Step Delay", value: 0.75, min: 0.1, max: 3 },
        { type: "label",    text: "Selected: N/A | Active: None | Auto Step: Off" },
        { type: "divider",  text: "Boat" },
        { type: "button",   text: "Launch Boat" },
        { type: "button",   text: "Quick End Run" },
        { type: "button",   text: "Quick End Run + Claim" },
        { type: "button",   text: "Claim Golden Chest" },
        { type: "button",   text: "Reapply Motor Tuning" },
        { type: "button",   text: "Clear Team Blocks" },
        { type: "button",   text: "Teleport To Team Plot" },
        { type: "divider",  text: "Water" },
        { type: "button",   text: "Make Water Not Deadly" },
        { type: "button",   text: "Disable Water Safety" },
      ],
    }),
  ];
}

// ─── Main → Chests ────────────────────────────────────────────────────────────

function chestsSections(): SectionDef[] {
  return [
    section({
      name: "Chests",
      icon: ShoppingCart,
      column: "left",
      elements: [
        { type: "dropdown", text: "Chest", value: "Common Chest", width: 180 },
        { type: "textbox",  text: "Chest Buy Amount", value: "1", placeholder: "1-1000" },
        { type: "toggle",   text: "Auto Buy Chest",      value: false },
        { type: "toggle",   text: "Auto Buy Best Chest", value: false },
        { type: "button",   text: "Buy Selected Chest" },
        { type: "button",   text: "Buy Best Affordable Chest" },
      ],
    }),
  ];
}

// ─── Main → Autofarm ──────────────────────────────────────────────────────────

function autofarmSections(): SectionDef[] {
  return [
    section({
      name: "Autofarm",
      icon: RefreshCcw,
      column: "left",
      elements: [
        { type: "toggle", text: "Enable Autofarm", value: false },
        { type: "slider", text: "Teleport Delay",    value: 2, min: 0.05, max: 3,  suffix: "s" },
        { type: "slider", text: "Time Between Runs", value: 5, min: 0,    max: 15, suffix: "s" },
        { type: "toggle", text: "Autoclaim", value: false },
        { type: "divider", text: "Stats" },
        { type: "label",   text: "Gold/hr: N/A (earned: N/A)" },
      ],
    }),
  ];
}

// ─── Builds → Stealing ────────────────────────────────────────────────────────

function stealingSections(): SectionDef[] {
  return [
    section({
      name: "Stealing",
      icon: Hammer,
      column: "left",
      elements: [
        { type: "dropdown", text: "Team", value: "My Team", width: 180 },
        { type: "button",   text: "Copy Build" },
        { type: "button",   text: "Stop Build" },
        { type: "textbox",  text: "Export Name", value: "stolen_build", placeholder: "stolen_build" },
        { type: "button",   text: "Export Team Build" },
      ],
    }),
  ];
}

// ─── Builds → Files ───────────────────────────────────────────────────────────

function buildFilesSections(): SectionDef[] {
  return [
    section({
      name: "Files",
      icon: Package,
      column: "left",
      elements: [
        { type: "textbox", text: "File Name", value: "", placeholder: "mybuild.build" },
        { type: "button",  text: "Refresh .build Files" },
        { type: "button",  text: "Load Build" },
      ],
    }),
  ];
}

// ─── Builds → Image Loader ────────────────────────────────────────────────────

function imageLoaderSections(): SectionDef[] {
  return [
    section({
      name: "Image Loader",
      icon: Eye,
      column: "left",
      elements: [
        { type: "textbox",  text: "Image URL",         value: "", placeholder: "https://..." },
        { type: "dropdown", text: "Preferred Block",   value: "Auto", width: 180 },
        { type: "slider",   text: "Block Size",        value: 2,  min: 1, max: 6   },
        { type: "slider",   text: "Pixel Step",        value: 3,  min: 1, max: 8   },
        { type: "slider",   text: "Alpha Threshold %", value: 20, min: 0, max: 100 },
        { type: "button",   text: "Parse Image" },
        { type: "button",   text: "Build Parsed Image" },
      ],
    }),
  ];
}

// ─── Player ───────────────────────────────────────────────────────────────────

function playerMovementSections(): SectionDef[] {
  return [
    section({
      name: "Movement",
      icon: Zap,
      column: "left",
      elements: [
        { type: "slider",  text: "Walk Speed",     value: 16, min: 16, max: 200 },
        { type: "toggle",  text: "Loop WalkSpeed", value: false },
        { type: "toggle",  text: "Noclip",         value: false },
        { type: "slider",  text: "Jump Power",     value: 50, min: 50, max: 200 },
        { type: "button",  text: "Reset Character" },
      ],
    }),
  ];
}

function playerVisualsSections(): SectionDef[] {
  return [
    section({
      name: "Visuals",
      icon: Sparkles,
      column: "right",
      elements: [
        { type: "toggle", text: "Spin Self",    value: false },
        { type: "slider", text: "Spin Speed",   value: 180, min: 30, max: 720 },
        { type: "toggle", text: "Rainbow Body", value: false },
        { type: "button", text: "Party Mode" },
        { type: "button", text: "Reset Visuals" },
      ],
    }),
  ];
}

// ─── Debug ────────────────────────────────────────────────────────────────────

function debugInspectorSections(): SectionDef[] {
  return [
    section({
      name: "Inspector",
      icon: Bug,
      column: "left",
      elements: [
        { type: "label",  text: "Quest: N/A | Gold: N/A | Team: N/A | Zone: N/A | Players: 0" },
        { type: "label",  text: "Active: None | Objective: None | Distance: N/A" },
        { type: "label",  text: "Exists: Off | Parts: 0 | Models: 0 | Primary: None" },
        { type: "label",  text: "Best affordable: None | Prices: N/A" },
        { type: "label",  text: "Remotes: N/A | Missing: 0" },
        { type: "toggle", text: "Live Refresh", value: true },
        { type: "slider", text: "Refresh Delay", value: 1, min: 0.2, max: 5, suffix: "s" },
        { type: "button", text: "Refresh Snapshot" },
        { type: "button", text: "Inspect Quest Objective" },
        { type: "button", text: "Inspect Chest Prices" },
        { type: "button", text: "Inspect Remote Status" },
        { type: "button", text: "Show Full Snapshot" },
      ],
    }),
  ];
}

function debugCopySections(): SectionDef[] {
  return [
    section({
      name: "Copy Data",
      icon: Package,
      column: "right",
      elements: [
        { type: "button", text: "Copy Snapshot Summary" },
        { type: "button", text: "Copy JobId" },
        { type: "button", text: "Copy PlaceId" },
        { type: "button", text: "Copy Team Zone" },
        { type: "button", text: "Copy Active Quest" },
        { type: "button", text: "Copy Objective Path" },
        { type: "button", text: "Copy Boat Summary" },
        { type: "button", text: "Copy Chest Summary" },
        { type: "button", text: "Copy Remote Summary" },
        { type: "button", text: "Copy Full Snapshot" },
      ],
    }),
  ];
}

// ─── Addons ───────────────────────────────────────────────────────────────────

function addonsLoaderSections(): SectionDef[] {
  return [
    section({
      name: "Loader",
      icon: Plug2,
      column: "left",
      elements: [
        { type: "label",  text: "Folder: …/addons" },
        { type: "label",  text: "Status: Scanning addons…" },
        { type: "label",  text: "Files: No addon files yet." },
        { type: "button", text: "Refresh Addons" },
        { type: "button", text: "Download Example Addon" },
        { type: "button", text: "Copy Addon Folder" },
      ],
    }),
    section({
      name: "Guide",
      icon: BookOpen,
      column: "right",
      elements: [
        { type: "label", text: "Each file should return function(window, icons, library, notifications)." },
        { type: "label", text: "Drop .lua or .luau files into the addons folder, then click Refresh Addons. The example file only loads after clicking Download Example Addon." },
      ],
    }),
  ];
}

// ─── Universal ────────────────────────────────────────────────────────────────

function universalPlayerSections(): SectionDef[] {
  return [
    section({
      name: "Player",
      icon: User,
      column: "left",
      elements: [
        { type: "slider", text: "Walk Speed",    value: 16,  min: 0, max: 200 },
        { type: "slider", text: "Jump Power",    value: 50,  min: 0, max: 500 },
        { type: "slider", text: "Fly Speed",     value: 50,  min: 0, max: 200 },
        { type: "toggle", text: "Infinite Jump", value: false },
        { type: "toggle", text: "Anti Void",     value: false },
        { type: "toggle", text: "Anti Fling",    value: false },
        { type: "toggle", text: "Anti AFK",      value: false },
        { type: "toggle", text: "NoClip",        value: false },
        { type: "toggle", text: "Fly",           value: false },
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
        { type: "slider",   text: "Aimbot FOV",        value: 60,  min: 0, max: 360 },
        { type: "slider",   text: "Aimbot Smoothness",  value: 0.4, min: 0, max: 1   },
        { type: "dropdown", text: "Aimbot Mode",        value: "Always", width: 160  },
        { type: "toggle",   text: "Aimbot",             value: false },
        { type: "toggle",   text: "Wallcheck",          value: false },
        { type: "keybind",  text: "Aimbot Key",         value: "LA"  },
        { type: "toggle",   text: "Draw FOV",           value: false },
      ],
    }),
  ];
}

// ─── Visuals ──────────────────────────────────────────────────────────────────

function lightingSections(): SectionDef[] {
  return [
    section({
      name: "Lighting",
      icon: Lightbulb,
      column: "left",
      elements: [
        { type: "toggle",   text: "Force",                     value: false },
        { type: "divider",  text: "Colors" },
        { type: "toggle",   text: "Ambient",                   value: false },
        { type: "toggle",   text: "Outdoor Ambient",           value: false },
        { type: "toggle",   text: "Shift Bottom",              value: false },
        { type: "toggle",   text: "Shift Top",                 value: false },
        { type: "toggle",   text: "Fog Color",                 value: false },
        { type: "divider",  text: "Brightness & Scaling" },
        { type: "slider",   text: "Brightness",                 value: 1.5, min: 0,  max: 10 },
        { type: "slider",   text: "Environment Diffuse Scale",  value: 0,   min: 0,  max: 1  },
        { type: "slider",   text: "Environment Specular Scale", value: 0,   min: 0,  max: 1  },
        { type: "slider",   text: "Shadow Softness",            value: 0.5, min: 0,  max: 1  },
        { type: "divider",  text: "Rendering" },
        { type: "dropdown", text: "Technology",     value: "ShadowMap", width: 160 },
        { type: "toggle",   text: "Global Shadows", value: true },
        { type: "divider",  text: "Time & Position" },
        { type: "slider",   text: "Clock Time",             value: 14,   min: 0,  max: 23 },
        { type: "slider",   text: "Geographic Latitude",    value: 41.7, min: 0,  max: 90 },
        { type: "slider",   text: "Exposure Compensation",  value: 0,    min: -5, max: 5  },
        { type: "divider",  text: "Fog" },
        { type: "slider",   text: "Fog Start", value: 0,      min: 0, max: 50000  },
        { type: "slider",   text: "Fog End",   value: 100000, min: 0, max: 100000 },
      ],
    }),
  ];
}

function environmentSections(): SectionDef[] {
  return [
    section({
      name: "Skybox",
      icon: Package,
      column: "left",
      elements: [
        { type: "toggle",  text: "Force",                  value: false },
        { type: "toggle",  text: "Celestial Bodies Shown", value: true  },
        { type: "divider", text: "Celestial" },
        { type: "slider",  text: "Star Count",        value: 3000, min: 0, max: 5000 },
        { type: "slider",  text: "Sun Angular Size",  value: 21,   min: 0, max: 60   },
        { type: "slider",  text: "Moon Angular Size", value: 11,   min: 0, max: 60   },
        { type: "divider", text: "Textures" },
        { type: "textbox", text: "Sun Texture",  value: "rbxasset://sky/sun.jpg"  },
        { type: "textbox", text: "Moon Texture", value: "rbxasset://sky/moon.jpg" },
        { type: "divider", text: "Skybox Faces" },
        { type: "textbox", text: "Back",  value: "http://www.roblox.com/asset?id=58372690" },
        { type: "textbox", text: "Down",  value: "http://www.roblox.com/asset?id=58372722" },
        { type: "textbox", text: "Front", value: "http://www.roblox.com/asset?id=58372742" },
        { type: "textbox", text: "Left",  value: "http://www.roblox.com/asset?id=58372777" },
        { type: "textbox", text: "Right", value: "http://www.roblox.com/asset?id=58372794" },
        { type: "textbox", text: "Up",    value: "http://www.roblox.com/asset?id=58372812" },
      ],
    }),
  ];
}

function effectSections(): SectionDef[] {
  return [
    section({
      name: "Color Correction",
      icon: Sparkles,
      column: "left",
      elements: [
        { type: "toggle", text: "Force",      value: false },
        { type: "toggle", text: "Enabled",    value: true  },
        { type: "slider", text: "Brightness", value: 0.1,  min: -1, max: 1 },
        { type: "slider", text: "Contrast",   value: 0.18, min: -1, max: 1 },
        { type: "slider", text: "Saturation", value: 0,    min: -1, max: 1 },
        { type: "toggle", text: "Tint Color", value: false },
      ],
    }),
  ];
}

// ─── Settings ─────────────────────────────────────────────────────────────────

function settingsSections(): SectionDef[] {
  return [
    section({
      name: "Game",
      icon: Cog,
      column: "left",
      elements: [
        { type: "button", text: "Rejoin Server" },
        { type: "button", text: "Server Hop" },
      ],
    }),
    section({
      name: "Menu",
      icon: User,
      column: "right",
      elements: [
        { type: "keybind", text: "UI Keybind",  value: "RC"  },
        { type: "toggle",  text: "Menu Accent", value: false },
        { type: "button",  text: "Export Logs" },
        { type: "button",  text: "Unload Lumin UI" },
        { type: "divider", text: "Configs" },
        { type: "button",  text: "BABFT" },
        { type: "textbox", text: "Config Name", value: "", placeholder: "type here..." },
        { type: "button",  text: "Save Config" },
        { type: "button",  text: "Load Config" },
        { type: "button",  text: "Delete Config" },
      ],
    }),
  ];
}

// ─── Export ───────────────────────────────────────────────────────────────────

export const BABFT_MAIN: MileniumConfig = {
  gameName: "Build A Boat For Treasure",
  placeId: 537413528,
  tabs: [
    // ── Game-specific ────────────────────────────────────────────────────────
    {
      name: "Main",
      icon: Home,
      order: 1010,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: [...motorboatSections(), ...utilitiesSections()],
        },
        { name: "Chests",   order: 2, sections: chestsSections()   },
        { name: "Autofarm", order: 3, sections: autofarmSections() },
      ],
    },
    {
      name: "Builds",
      icon: Hammer,
      order: 1015,
      pages: [
        { name: "Stealing",     order: 1, sections: stealingSections()    },
        { name: "Files",        order: 2, sections: buildFilesSections()  },
        { name: "Image Loader", order: 3, sections: imageLoaderSections() },
      ],
    },
    {
      name: "Player",
      icon: User,
      order: 1020,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: [...playerMovementSections(), ...playerVisualsSections()],
        },
      ],
    },
    {
      name: "Debug",
      icon: Bug,
      order: 1025,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: [...debugInspectorSections(), ...debugCopySections()],
        },
      ],
    },
    {
      name: "Addons",
      icon: Plug2,
      order: 1030,
      pages: [
        { name: "Main", order: 1, sections: addonsLoaderSections() },
      ],
    },
    // ── Universal ────────────────────────────────────────────────────────────
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
        { name: "Lighting",    order: 1, sections: lightingSections()    },
        { name: "Environment", order: 2, sections: environmentSections() },
        { name: "Effects",     order: 3, sections: effectSections()      },
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