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
  Gift,
  Globe,
  Home,
  Lightbulb,
  Package,
  Plug2,
  RefreshCcw,
  Route,
  ShieldOff,
  Sparkles,
  Swords,
  Target,
  User,
  Zap,
  Lock,
  MapPin,
  Copy,
  Settings,
  Repeat,
  Plane,
  Wrench,
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

// ─── Main ─────────────────────────────────────────────────────────────────────

function mainDashboardSections(): SectionDef[] {
  return [
    section({
      name: "Dashboard",
      icon: Settings,
      column: "left",
      elements: [
        { type: "label",  text: "Dashboard Status", value: "Loading..." },
        { type: "label",  text: "Stats",             value: "Loading..." },
        { type: "label",  text: "Last Action",       value: "Idle" },
        { type: "label",  text: "Activity",          value: "Loading..." },
        { type: "button", text: "Refresh Status" },
        { type: "button", text: "Teleport Home (No Deposit)" },
        { type: "button", text: "Start Autofarm" },
        { type: "button", text: "Stop Autofarm" },
        { type: "button", text: "Run One Cycle" },
        { type: "button", text: "Sell Inventory" },
        { type: "button", text: "Copy Snapshot" },
      ],
    }),
    section({
      name: "Quick Copy",
      icon: Copy,
      column: "right",
      elements: [
        { type: "button", text: "Copy Plot Name" },
        { type: "button", text: "Copy Cash" },
        { type: "button", text: "Copy Brainrots" },
        { type: "button", text: "Copy Active Count" },
        { type: "button", text: "Copy Last Action" },
      ],
    }),
  ];
}

// ─── Travel ───────────────────────────────────────────────────────────────────

function travelRoutesSections(): SectionDef[] {
  return [
    section({
      name: "Routes",
      icon: Plane,
      column: "left",
      elements: [
        { type: "label",  text: "Route Status", value: "Loading..." },
        { type: "button", text: "Refresh Route Snapshot" },
        { type: "button", text: "Teleport 3000x Area" },
        { type: "button", text: "Teleport End Portal" },
        { type: "button", text: "Teleport Best Brainrot" },
        { type: "button", text: "Teleport Home (No Deposit)" },
        { type: "button", text: "Return To Plot" },
        { type: "button", text: "Copy Route Snapshot" },
      ],
    }),
    section({
      name: "Base Tools",
      icon: Home,
      column: "right",
      elements: [
        { type: "label",  text: "Base Snapshot", value: "Loading..." },
        { type: "button", text: "Teleport Base Spawn" },
        { type: "button", text: "Collect Money Now" },
        { type: "button", text: "Teleport Quest Board" },
        { type: "button", text: "Teleport Sell Shop" },
        { type: "button", text: "Teleport Speed Shop" },
        { type: "button", text: "Teleport Active Wall" },
        { type: "button", text: "Copy Base Snapshot" },
      ],
    }),
  ];
}

// ─── Upgrades ─────────────────────────────────────────────────────────────────

function upgradesSections(): SectionDef[] {
  return [
    section({
      name: "Plot Upgrades",
      icon: Zap,
      column: "left",
      elements: [
        { type: "label",  text: "Upgrade Status", value: "Loading..." },
        { type: "button", text: "Place Brainrots" },
        { type: "button", text: "Upgrade Local Pods" },
        { type: "button", text: "Max Upgrade Local Pods" },
      ],
    }),
    section({
      name: "Player Upgrades",
      icon: Target,
      column: "right",
      elements: [
        { type: "button", text: "Upgrade Power" },
        { type: "button", text: "Max Power" },
        { type: "button", text: "Upgrade Range" },
        { type: "button", text: "Max Range" },
        { type: "button", text: "Upgrade Carry" },
        { type: "button", text: "Max Carry" },
      ],
    }),
    section({
      name: "Upgrade Presets",
      icon: Sparkles,
      column: "right",
      elements: [
        { type: "button", text: "Power +5" },
        { type: "button", text: "Range +5" },
        { type: "button", text: "Carry +5" },
        { type: "button", text: "Upgrade All x3" },
        { type: "button", text: "Copy Upgrade Snapshot" },
      ],
    }),
  ];
}

// ─── AutoFarm ─────────────────────────────────────────────────────────────────

function autofarmSections(): SectionDef[] {
  return [
    section({
      name: "Autofarm",
      icon: Route,
      column: "left",
      elements: [
        { type: "label",  text: "Loop Status",    value: "Stopped" },
        { type: "label",  text: "Swing Settings", value: "Range: 100% | Power: 100%" },
        { type: "button", text: "Start Autofarm" },
        { type: "button", text: "Stop Autofarm" },
        { type: "button", text: "Run One Cycle" },
      ],
    }),
    section({
      name: "Presets",
      icon: Sparkles,
      column: "right",
      elements: [
        { type: "button", text: "Fast Cycle" },
        { type: "button", text: "Balanced Cycle" },
        { type: "button", text: "Safe Cycle" },
      ],
    }),
  ];
}

// ─── Automation ───────────────────────────────────────────────────────────────

function automationSections(): SectionDef[] {
  return [
    section({
      name: "Automation",
      icon: Repeat,
      column: "left",
      elements: [
        { type: "label",  text: "Automation Status", value: "Utility: Off (45.0s) | Sell: Off (15.0s) | Steal: Off (2.5s)" },
        { type: "button", text: "Toggle Auto Utility" },
        { type: "button", text: "Utility Delay +15s" },
        { type: "button", text: "Utility Delay -15s" },
        { type: "button", text: "Toggle Auto Sell" },
        { type: "button", text: "Sell Delay +5s" },
        { type: "button", text: "Sell Delay -5s" },
        { type: "button", text: "Toggle Auto Steal" },
        { type: "button", text: "Steal Delay +0.5s" },
        { type: "button", text: "Steal Delay -0.5s" },
        { type: "button", text: "Run Utility Cycle Now" },
        { type: "button", text: "Sell Inventory Now" },
        { type: "button", text: "Steal From Plots Now" },
      ],
    }),
    section({
      name: "Sequences",
      icon: Sparkles,
      column: "right",
      elements: [
        { type: "button", text: "Run Utility + Sell" },
        { type: "button", text: "Run Utility + Steal" },
        { type: "button", text: "Run Full Automation" },
        { type: "button", text: "Reset Automation Timers" },
      ],
    }),
    section({
      name: "Gift Handling",
      icon: Gift,
      column: "right",
      elements: [
        { type: "button", text: "Auto Accept Gifts" },
        { type: "button", text: "Auto Decline Gifts" },
        { type: "button", text: "Disable Gift Auto" },
      ],
    }),
  ];
}

// ─── Debug ────────────────────────────────────────────────────────────────────

function debugSections(): SectionDef[] {
  return [
    section({
      name: "Inspector",
      icon: Bug,
      column: "left",
      elements: [
        { type: "label",  text: "Debug Status", value: "Loading..." },
        { type: "button", text: "Refresh Debug Snapshot" },
        { type: "button", text: "Scan Prompt Counts" },
        { type: "button", text: "Copy Debug Snapshot" },
      ],
    }),
    section({
      name: "Copy Data",
      icon: Copy,
      column: "right",
      elements: [
        { type: "button", text: "Copy JobId" },
        { type: "button", text: "Copy PlaceId" },
        { type: "button", text: "Copy Plot + Cash" },
        { type: "button", text: "Copy Swing Settings" },
        { type: "button", text: "Copy Active Count" },
        { type: "button", text: "Copy Prompt Stats" },
        { type: "button", text: "Copy Nearest Brainrot" },
        { type: "button", text: "Copy Nearest ID" },
      ],
    }),
  ];
}

// ─── Misc ─────────────────────────────────────────────────────────────────────

function miscSections(): SectionDef[] {
  return [
    section({
      name: "Rewards",
      icon: Gift,
      column: "left",
      elements: [
        { type: "button", text: "Claim Free Reward" },
        { type: "button", text: "Claim Daily Reward" },
        { type: "button", text: "Claim Wheel" },
        { type: "button", text: "Claim Brainrot Index" },
        { type: "button", text: "Claim Package Reward" },
        { type: "button", text: "Run Reward Sweep" },
      ],
    }),
    section({
      name: "Safety",
      icon: ShieldOff,
      column: "right",
      elements: [
        { type: "button", text: "Remove Deadly Parts" },
      ],
    }),
  ];
}

// ─── Player ───────────────────────────────────────────────────────────────────

function playerSections(): SectionDef[] {
  return [
    section({
      name: "Movement",
      icon: Zap,
      column: "left",
      elements: [
        { type: "slider", text: "WalkSpeed",       value: 16,  min: 16,  max: 200 },
        { type: "toggle", text: "Loop WalkSpeed",  value: false },
        { type: "toggle", text: "Noclip",          value: false },
        { type: "slider", text: "JumpPower",        value: 50,  min: 50,  max: 200 },
        { type: "button", text: "Reset Character" },
      ],
    }),
    section({
      name: "Visuals",
      icon: Sparkles,
      column: "right",
      elements: [
        { type: "toggle", text: "Spin Self",    value: false },
        { type: "slider", text: "Spin Speed",   value: 180, min: 30,  max: 720 },
        { type: "toggle", text: "Rainbow Body", value: false },
        { type: "button", text: "Party Mode" },
        { type: "button", text: "Reset Visuals" },
      ],
    }),
    section({
      name: "Quick Presets",
      icon: Sparkles,
      column: "right",
      elements: [
        { type: "button", text: "WalkSpeed 32" },
        { type: "button", text: "WalkSpeed 64" },
        { type: "button", text: "WalkSpeed 100" },
        { type: "button", text: "JumpPower 100" },
        { type: "button", text: "JumpPower 200" },
        { type: "button", text: "Reset Movement" },
        { type: "toggle", text: "Infinite Jump", value: false },
      ],
    }),
    section({
      name: "Combat",
      icon: Swords,
      column: "right",
      elements: [
        { type: "label",  text: "Auto Swing",           value: "Presses space when the swing ring prompt is available." },
        { type: "toggle", text: "Auto Swing",           value: false },
        { type: "slider", text: "Swing Range Extender", value: 100, min: 100, max: 750 },
        { type: "slider", text: "Swing Power Extender", value: 100, min: 100, max: 750 },
      ],
    }),
  ];
}

// ─── Addons ───────────────────────────────────────────────────────────────────

function addonsSections(): SectionDef[] {
  return [
    section({
      name: "Loader",
      icon: Plug2,
      column: "left",
      elements: [
        { type: "label",  text: "Folder" },
        { type: "label",  text: "Status", value: "Scanning addons…" },
        { type: "label",  text: "Files",  value: "No addon files yet." },
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
    section({
      name: "Links",
      icon: Anchor,
      column: "right",
      elements: [
        { type: "button", text: "Copy Game Link" },
        { type: "button", text: "Copy Current Server Link" },
        { type: "button", text: "Copy JobId" },
        { type: "button", text: "Rejoin Current Server" },
      ],
    }),
  ];
}

// ─── Export ───────────────────────────────────────────────────────────────────

export const swingobby_main: MileniumConfig = {
  gameName: "Swing Obby for Brainrot",
  placeId: 0, // TODO: replace with actual placeId
  tabs: [
    {
      name: "Main",
      icon: Lock,
      order: 1010,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: mainDashboardSections(),
        },
      ],
    },
    {
      name: "Travel",
      icon: Plane,
      order: 1015,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: travelRoutesSections(),
        },
      ],
    },
    {
      name: "Upgrades",
      icon: Wrench,
      order: 1020,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: upgradesSections(),
        },
      ],
    },
    {
      name: "AutoFarm",
      icon: Route,
      order: 1025,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: autofarmSections(),
        },
      ],
    },
    {
      name: "Automation",
      icon: Repeat,
      order: 1030,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: automationSections(),
        },
      ],
    },
    {
      name: "Debug",
      icon: Bug,
      order: 1035,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: debugSections(),
        },
      ],
    },
    {
      name: "Misc",
      icon: Gift,
      order: 1040,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: miscSections(),
        },
      ],
    },
    {
      name: "Player",
      icon: User,
      order: 1045,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: playerSections(),
        },
      ],
    },
    {
      name: "Addons",
      icon: Plug2,
      order: 1050,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: addonsSections(),
        },
      ],
    },
    {
      name: "Settings",
      icon: Cog,
      order: 1055,
      pages: [
        {
          name: "Main",
          order: 1,
          sections: settingsSections(),
        },
      ],
    },
  ],
};

export const SWINGOBBYFORBRAINROT_DATASETS: Record<string, MileniumConfig> = {
  Main: swingobby_main,
};