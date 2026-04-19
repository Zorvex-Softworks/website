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
  Users,
  Zap,
  Lock,
  MapPin,
  Route,
  Copy,
  Settings,
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

function mainStatusSections(): SectionDef[] {
  return [
    section({
      name: "Status",
      icon: Settings,
      column: "left",
      elements: [
        { type: "label",  text: "Current World",    value: "Loading..." },
        { type: "label",  text: "Next World",        value: "Loading..." },
        { type: "label",  text: "Money",             value: "Loading..." },
        { type: "label",  text: "Next Wall",         value: "Loading..." },
        { type: "label",  text: "Holding Brainrot",  value: "Loading..." },
        { type: "label",  text: "Players in Server", value: "Loading..." },
        { type: "label",  text: "Autofarm",          value: "Loading..." },
        { type: "label",  text: "Utility Modes",     value: "Loading..." },
        { type: "button", text: "Refresh Status" },
      ],
    }),
    section({
      name: "Power",
      icon: Zap,
      column: "left",
      elements: [
        { type: "label",  text: "⚠️ NOTE:", value: "This will spend your money" },
        { type: "button", text: "+10 Power" },
        { type: "button", text: "+100 Power" },
        { type: "button", text: "+1000 Power" },
        { type: "button", text: "+10000 Power" },
      ],
    }),
    section({
      name: "Teleports",
      icon: MapPin,
      column: "right",
      elements: [
        { type: "button", text: "Safe Zone" },
        { type: "button", text: "Sell Shop" },
        { type: "button", text: "Speed Shop" },
        { type: "button", text: "Quest Board" },
        { type: "button", text: "Portal" },
        { type: "button", text: "First Wall" },
        { type: "button", text: "Late Wall" },
        { type: "toggle", text: "Auto Portal Next World", value: false },
      ],
    }),
  ];
}

// ─── Main → Quick Tools ───────────────────────────────────────────────────────

function quickToolsSections(): SectionDef[] {
  return [
    section({
      name: "Status",
      icon: Settings,
      column: "left",
      elements: [
        { type: "button", text: "Show Status" },
      ],
    }),
    section({
      name: "Core Actions",
      icon: Route,
      column: "left",
      elements: [
        { type: "button", text: "Travel Next World" },
        { type: "button", text: "Sell Inventory Now" },
      ],
    }),
  ];
}

// ─── Main → Tools ─────────────────────────────────────────────────────────────

function toolsSections(): SectionDef[] {
  return [
    section({
      name: "Teleport Targets",
      icon: MapPin,
      column: "left",
      elements: [
        { type: "button", text: "Teleport Active Wall" },
        { type: "button", text: "Teleport Safe Zone" },
        { type: "button", text: "Teleport Portal" },
        { type: "button", text: "Teleport Quest Board" },
        { type: "button", text: "Teleport Sell Shop" },
        { type: "button", text: "Teleport Speed Shop" },
      ],
    }),
    section({
      name: "Base Tools",
      icon: Home,
      column: "right",
      elements: [
        { type: "button", text: "TP to Base" },
        { type: "button", text: "Collect Money" },
      ],
    }),
    section({
      name: "Drill Shop",
      icon: Hammer,
      column: "right",
      elements: [
        { type: "dropdown", text: "Drill", value: "Auto", width: 180 },
        { type: "button",   text: "Buy Selected Drill" },
      ],
    }),
  ];
}

// ─── Main → Autofarm ──────────────────────────────────────────────────────────

function autofarmSections(): SectionDef[] {
  return [
    section({
      name: "Utility",
      icon: Settings,
      column: "left",
      elements: [
        { type: "toggle", text: "Auto Sell Inventory",  value: false },
        { type: "toggle", text: "Native Auto Collect",  value: false },
        { type: "button", text: "Sell Inventory Now" },
      ],
    }),
    section({
      name: "Autofarm",
      icon: Zap,
      column: "left",
      elements: [
        { type: "toggle", text: "Autofarm", value: false },
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
        { type: "slider",  text: "WalkSpeed",      value: 16,  min: 16, max: 200 },
        { type: "toggle",  text: "Loop WalkSpeed", value: false },
        { type: "toggle",  text: "Noclip",         value: false },
        { type: "slider",  text: "JumpPower",       value: 50,  min: 50, max: 200 },
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
        { type: "slider", text: "Spin Speed",   value: 180,  min: 30,  max: 720 },
        { type: "toggle", text: "Rainbow Body", value: false },
        { type: "button", text: "Party Mode" },
        { type: "button", text: "Reset Visuals" },
      ],
    }),
  ];
}

// ─── Trolling ─────────────────────────────────────────────────────────────────

function trollingTargetSections(): SectionDef[] {
  return [
    section({
      name: "Target Player",
      icon: Users,
      column: "left",
      elements: [
        { type: "label",    text: "Target Status", value: "Select a target player." },
        { type: "dropdown", text: "Player",        value: "No Players", width: 180 },
        { type: "button",   text: "Refresh Players" },
        { type: "button",   text: "Teleport Near Target" },
        { type: "button",   text: "Teleport Behind Target" },
        { type: "button",   text: "Teleport On Target" },
        { type: "button",   text: "Teleport Above Target" },
        { type: "button",   text: "Teleport In Front" },
        { type: "toggle",   text: "Orbit Target",     value: false },
        { type: "slider",   text: "Orbit Radius",     value: 10, min: 4,  max: 20 },
        { type: "slider",   text: "Orbit Speed",      value: 180, min: 30, max: 720 },
        { type: "toggle",   text: "Follow Target",    value: false },
        { type: "slider",   text: "Follow Distance",  value: 8,  min: 4,  max: 20 },
        { type: "slider",   text: "Follow Height",    value: 3,  min: 0,  max: 12 },
        { type: "button",   text: "Bump Target" },
      ],
    }),
    section({
      name: "Extras",
      icon: Sparkles,
      column: "right",
      elements: [
        { type: "toggle", text: "Camera Lock",   value: false },
        { type: "button", text: "Orbit Tight" },
        { type: "button", text: "Orbit Wide" },
        { type: "button", text: "Stop Orbit" },
        { type: "button", text: "Stop Follow" },
        { type: "button", text: "Clear Target" },
        { type: "button", text: "Stop All Trolls" },
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
        { type: "label",  text: "Snapshot",      value: "Press refresh to load." },
        { type: "label",  text: "Base And Drill", value: "Press inspect to load." },
        { type: "label",  text: "Attributes",     value: "Press inspect to load." },
        { type: "button", text: "Refresh Snapshot" },
        { type: "button", text: "Show Full Snapshot" },
        { type: "button", text: "Inspect Base Setup" },
        { type: "button", text: "Check Wall Targets" },
      ],
    }),
  ];
}

function debugCopySections(): SectionDef[] {
  return [
    section({
      name: "Copy Data",
      icon: Copy,
      column: "right",
      elements: [
        { type: "button", text: "Copy Status Summary" },
        { type: "button", text: "Copy JobId" },
        { type: "button", text: "Copy PlaceId" },
        { type: "button", text: "Copy Player Name" },
        { type: "button", text: "Copy Current World" },
        { type: "button", text: "Copy Next World" },
        { type: "button", text: "Copy Next Wall" },
        { type: "button", text: "Copy Current Plot" },
        { type: "button", text: "Copy Base Spawn" },
        { type: "button", text: "Copy Collect Target" },
        { type: "button", text: "Copy Current Drill" },
        { type: "button", text: "Copy Owned Drills" },
        { type: "button", text: "Copy Attribute Summary" },
        { type: "button", text: "Copy Debug Snapshot" },
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

// ─── Settings ─────────────────────────────────────────────────────────────────

function settingsSections(): SectionDef[] {
  return [
    section({
      name: "Language",
      icon: Globe,
      column: "left",
      elements: [
        { type: "dropdown", text: "Script Language", value: "English", width: 180 },
      ],
    }),
    section({
      name: "Actions",
      icon: Cog,
      column: "left",
      elements: [
        { type: "button", text: "Server Hop" },
        { type: "button", text: "Rejoin" },
        { type: "button", text: "Copy PlaceId" },
        { type: "button", text: "Close GUI" },
      ],
    }),
  ];
}

// ─── Export ───────────────────────────────────────────────────────────────────

export const drillfor_main: MileniumConfig = {
  gameName: "Drill For Brainrots",
  placeId: 537413528,
  tabs: [
    // ── Game-specific ────────────────────────────────────────────────────────
    {
      name: "Main",
      icon: Lock,
      order: 1010,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: mainStatusSections(),
        },
        {
          name: "Quick Tools",
          order: 2,
          sections: quickToolsSections(),
        },
        {
          name: "Tools",
          order: 3,
          sections: toolsSections(),
        },
        {
          name: "Autofarm",
          order: 4,
          sections: autofarmSections(),
        },
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
      name: "Trolling",
      icon: Bug,
      order: 1025,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: trollingTargetSections(),
        },
      ],
    },
    {
      name: "Debug",
      icon: Bug,
      order: 1030,
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
      order: 1035,
      pages: [
        { name: "Main", order: 1, sections: addonsLoaderSections() },
      ],
    },
    {
      name: "Settings",
      icon: Cog,
      order: 1040,
      pages: [
        { name: "Main", order: 1, sections: settingsSections() },
      ],
    },
  ],
};

export const DRILLFORBRAINROTS_DATASETS: Record<string, MileniumConfig> = {
  Main: drillfor_main,
};