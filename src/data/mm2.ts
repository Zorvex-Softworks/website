import type {
  MileniumConfig,
  SectionDef,
  UIEl,
} from "@/components/milenium/MileniumWindow";
import {
  CircleHelp,
  CloudFog,
  Cog,
  Coins,
  Crosshair,
  Eye,
  Globe,
  Lightbulb,
  Search,
  Settings2,
  ShieldOff,
  Sparkles,
  Sword,
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

function roundSections(): SectionDef[] {
  return [
    section({
      name: "Round Data",
      icon: CircleHelp,
      column: "left",
      elements: [
        { type: "label", text: "Murderer: 12356_justanime" },
        { type: "label", text: "Sheriff: lianailovecat" },
        { type: "label", text: "Hero: None" },
        { type: "label", text: "Map: House 2" },
      ],
    }),
    section({
      name: "Pickups",
      icon: Search,
      column: "right",
      elements: [
        { type: "toggle", text: "Auto Grab Gun", value: false },
        { type: "button", text: "Grab Gun" },
        { type: "button", text: "View Dropped Gun" },
      ],
    }),
    section({
      name: "Round Actions",
      icon: Eye,
      column: "right",
      elements: [
        { type: "button", text: "View Sheriff" },
        { type: "button", text: "View Murderer" },
        { type: "button", text: "Stop Viewing" },
      ],
    }),
  ];
}

function espSections(): SectionDef[] {
  return [
    section({
      name: "ESP",
      icon: Eye,
      column: "left",
      elements: [
        { type: "toggle", text: "Player Names", value: false },
        { type: "toggle", text: "Innocents ESP", value: false },
        { type: "toggle", text: "Murderer ESP", value: false },
        { type: "toggle", text: "Sheriff ESP", value: false },
        { type: "toggle", text: "Hero ESP", value: false },
        { type: "toggle", text: "Hide Lobby Visuals", value: false },
        { type: "slider", text: "Cham Transparency (%)", value: 30, min: 0, max: 100, suffix: "%" },
        { type: "toggle", text: "Trap ESP", value: false },
      ],
    }),
    section({
      name: "Info",
      icon: CircleHelp,
      column: "right",
      elements: [
        { type: "toggle", text: "Murderer Alert", value: false },
        { type: "toggle", text: "Instant Role Notify", value: false },
        { type: "toggle", text: "Blurt Roles", value: false },
      ],
    }),
  ];
}

function combatSections(): SectionDef[] {
  return [
    section({
      name: "Sherrif",
      icon: Crosshair,
      column: "left",
      elements: [
        { type: "toggle", text: "Silent Aim", value: false },
        { type: "slider", text: "Prediction Strength", value: 100, min: 0, max: 100 },
        { type: "button", text: "Instant Kill Murderer" },
      ],
    }),
    section({
      name: "Targeting",
      icon: User,
      column: "left",
      elements: [
        { type: "textbox", text: "Target Player", value: "", placeholder: "Player name" },
        { type: "textbox", text: "Whitelist Player", value: "", placeholder: "Player name" },
        { type: "button", text: "Kill Player" },
        { type: "button", text: "Clear Whitelist" },
      ],
    }),
    section({
      name: "Murderer",
      icon: Sword,
      column: "right",
      elements: [
        { type: "toggle", text: "Kill Player Aura", value: false },
        { type: "slider", text: "Kill Aura Range", value: 10, min: 0, max: 50 },
        { type: "button", text: "Kill All" },
        { type: "toggle", text: "Infinite Traps", value: false },
      ],
    }),
  ];
}

function farmingSections(): SectionDef[] {
  return [
    section({
      name: "Farming",
      icon: Coins,
      column: "left",
      elements: [
        { type: "toggle", text: "Auto Collect Coins", value: true },
        { type: "toggle", text: "Auto Kill All After Coins", value: true },
        { type: "toggle", text: "Auto Shoot Murderer After Coins", value: true },
        { type: "toggle", text: "Auto Return To Map When Full", value: true },
        { type: "toggle", text: "Auto Reset When Full", value: true },
      ],
    }),
  ];
}

function miscGeneralSections(): SectionDef[] {
  return [
    section({
      name: "World",
      icon: Globe,
      column: "left",
      elements: [
        { type: "toggle", text: "Xray (See Through Walls)", value: false },
        { type: "button", text: "TP To Map" },
      ],
    }),
    section({
      name: "Utility",
      icon: Settings2,
      column: "left",
      elements: [
        { type: "toggle", text: "Remove Barriers", value: false },
        { type: "toggle", text: "Trap Invincibility", value: false },
        { type: "toggle", text: "Improve FPS", value: false },
        { type: "toggle", text: "Loop All Interact", value: false },
        { type: "toggle", text: "Mute Other Radios", value: false },
        { type: "toggle", text: "Mute Trap Sounds", value: false },
      ],
    }),
    section({
      name: "Player Target",
      icon: User,
      column: "left",
      elements: [
        { type: "textbox", text: "Target Player", value: "", placeholder: "Player name" },
        { type: "button", text: "TP To Player" },
        { type: "button", text: "View Player" },
        { type: "button", text: "Stop Viewing" },
      ],
    }),
    section({
      name: "Movement",
      icon: User,
      column: "right",
      elements: [
        { type: "toggle", text: "Toggle Control Run", value: false },
        { type: "toggle", text: "Unlock Camera", value: false },
        { type: "toggle", text: "Void Protection", value: false },
        { type: "toggle", text: "Show Sprint Trail", value: false },
      ],
    }),
    section({
      name: "Teleports",
      icon: Globe,
      column: "right",
      elements: [
        { type: "button", text: "Teleport Lobby" },
        { type: "button", text: "Teleport Voting Room" },
        { type: "button", text: "Teleport Above Map" },
        { type: "button", text: "Teleport Sheriff" },
        { type: "button", text: "Teleport Murderer" },
      ],
    }),
  ];
}

function miscServerSections(): SectionDef[] {
  return [
    section({
      name: "Private Server",
      icon: ShieldOff,
      column: "left",
      elements: [
        { type: "button", text: "Check Control Access" },
        { type: "dropdown", text: "Game Mode", value: "Assassin", width: 160 },
        { type: "button", text: "Set Game Mode" },
        { type: "textbox", text: "Map Name", value: "", placeholder: "House 2" },
        { type: "button", text: "Set Map" },
        { type: "textbox", text: "Role Target", value: "", placeholder: "Blank = self" },
        { type: "button", text: "Force Murderer" },
        { type: "button", text: "Force Sheriff" },
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
        { type: "slider", text: "Jump Power", value: 50, min: 0, max: 200 },
        { type: "slider", text: "Fly Speed", value: 50, min: 0, max: 200 },
        { type: "button", text: "VC Ban Bypass" },
        { type: "toggle", text: "Infinite Jump", value: false },
        { type: "toggle", text: "Anti Void", value: false },
        { type: "toggle", text: "Anti Fling", value: false },
        { type: "toggle", text: "Anti AFK", value: false },
        { type: "toggle", text: "NoClip", value: false },
        { type: "toggle", text: "Fly", value: false },
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
        { type: "slider", text: "Aimbot FOV", value: 60, min: 0, max: 360 },
        { type: "slider", text: "Aimbot Smoothness", value: 0.4, min: 0, max: 1 },
        { type: "dropdown", text: "Aimbot Mode", value: "Always", width: 160 },
        { type: "toggle", text: "Aimbot", value: false },
        { type: "toggle", text: "Wallcheck", value: false },
        { type: "keybind", text: "Aimbot Key", value: "LA" },
        { type: "toggle", text: "Draw FOV", value: false },
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
        { type: "divider", text: "Colors" },
        { type: "toggle", text: "Ambient", value: false },
        { type: "toggle", text: "Outdoor Ambient", value: false },
        { type: "toggle", text: "Shift Bottom", value: false },
        { type: "toggle", text: "Shift Top", value: false },
        { type: "toggle", text: "Fog Color", value: false },
        { type: "divider", text: "Brightness & Scaling" },
        { type: "slider", text: "Brightness", value: 3.1, min: 0, max: 10 },
        { type: "slider", text: "Environment Diffuse Scale", value: 0, min: 0, max: 1 },
        { type: "slider", text: "Environment Specular Scale", value: 0, min: 0, max: 1 },
        { type: "slider", text: "Shadow Softness", value: 0.5, min: 0, max: 1 },
        { type: "divider", text: "Rendering" },
        { type: "dropdown", text: "Technology", value: "Voxel", width: 160 },
        { type: "toggle", text: "Global Shadows", value: true },
        { type: "divider", text: "Time & Position" },
        { type: "slider", text: "Clock Time", value: 14, min: 0, max: 24 },
        { type: "slider", text: "Geographic Latitude", value: 41.7, min: 0, max: 90 },
        { type: "slider", text: "Exposure Compensation", value: 0, min: -5, max: 5 },
        { type: "divider", text: "Fog" },
        { type: "slider", text: "Fog Start", value: 100000, min: 0, max: 100000 },
        { type: "slider", text: "Fog End", value: 100000, min: 0, max: 100000 },
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
        { type: "dropdown", text: "Preset", value: "Retro", width: 160 },
      ],
    }),
    section({
      name: "Blur - NewItemBlur",
      icon: CloudFog,
      column: "left",
      elements: [
        { type: "toggle", text: "Force", value: false },
        { type: "toggle", text: "Enabled", value: false },
        { type: "slider", text: "Size", value: 8, min: 0, max: 50 },
      ],
    }),
    section({
      name: "Blur - MenuBlur",
      icon: CloudFog,
      column: "right",
      elements: [
        { type: "toggle", text: "Force", value: false },
        { type: "toggle", text: "Enabled", value: false },
        { type: "slider", text: "Size", value: 14, min: 0, max: 50 },
      ],
    }),
  ];
}

function settingsSections(): SectionDef[] {
  return [
    section({
      name: "Game",
      icon: Globe,
      column: "left",
      elements: [
        { type: "button", text: "Rejoin Server" },
        { type: "button", text: "Server Hop" },
      ],
    }),
    section({
      name: "Menu",
      icon: Cog,
      column: "right",
      elements: [
        { type: "keybind", text: "UI Keybind", value: "RC" },
        { type: "toggle", text: "Reexecute On Teleport", value: false },
        { type: "toggle", text: "Silent Load", value: false },
        { type: "button", text: "Export Logs" },
        { type: "button", text: "Unload Lumin UI" },
        { type: "divider", text: "Configs" },
        { type: "dropdown", text: "Config List", value: "Default", width: 170 },
        { type: "textbox", text: "Config Name", value: "", placeholder: "type here..." },
        { type: "toggle", text: "Auto Load Config", value: false },
        { type: "button", text: "Save Config" },
        { type: "button", text: "Load Config" },
        { type: "button", text: "Delete Config" },
      ],
    }),
  ];
}

export const MM2_STANDARD: MileniumConfig = {
  gameName: "Murder Mystery 2",
  placeId: 142823291,
  tabs: [
    {
      name: "Info",
      icon: CircleHelp,
      order: 1010,
      pages: [
        { name: "Round", order: 10, sections: roundSections() },
        { name: "ESP", order: 20, sections: espSections() },
      ],
    },
    {
      name: "Combat",
      icon: Crosshair,
      order: 1020,
      pages: [{ name: "Main", order: 1, sections: combatSections() }],
    },
    {
      name: "Farming",
      icon: Coins,
      order: 1025,
      pages: [{ name: "Main", order: 1, sections: farmingSections() }],
    },
    {
      name: "Miscellaneous",
      icon: Settings2,
      order: 1030,
      pages: [
        { name: "General", order: 10, sections: miscGeneralSections() },
        { name: "Server", order: 20, sections: miscServerSections() },
      ],
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
        { name: "Environment", order: 2, sections: [] },
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

export const MM2_DATASETS: Record<string, MileniumConfig> = {
  Standard: MM2_STANDARD,
};