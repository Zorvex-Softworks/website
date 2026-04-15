import { ChevronsUpDown } from "lucide-react";
import { MileniumWindow } from "./milenium/MileniumWindow";
import WordFadeIn from "./ui/word-fade-in";
import { BlurFade } from "./magicui/blur-fade";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  DEFAULT_MILENIUM_GAME,
  MILENIUM_PREVIEW_DATASETS,
} from "@/data/milenium";
import { useUIState } from "./obsidian/providers/UIStateProvider";

function PreviewSelection({
  label,
  heading,
  value,
  values,
  setValue,
}: {
  label: string;
  heading: string;
  value: string;
  values: string[];
  setValue: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[260px] justify-between mt-5 mb-5 max-md:mt-2 max-md:mb-2 max-sm:mb-1 max-sm:mt-1"
        >
          {label}: {value}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[260px] p-0">
        <Command>
          <CommandList>
            <CommandGroup heading={heading}>
              {values.map((entry) => (
                <CommandItem
                  key={entry}
                  onSelect={() => {
                    setValue(entry);
                    setOpen(false);
                  }}
                >
                  {entry}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function ModeSelection({
  game,
  value,
  modes,
  games,
  setGame,
  setValue,
}: {
  game: string;
  value: string;
  modes: string[];
  games: string[];
  setGame: (value: string) => void;
  setValue: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <PreviewSelection
        label="Game"
        heading="Preview game"
        value={game}
        values={games}
        setValue={setGame}
      />
      <PreviewSelection
        label="Mode"
        heading={game}
        value={value}
        values={modes}
        setValue={setValue}
      />
    </div>
  );
}

export function Features() {
  const { game: activeGame } = useUIState();
  const games = React.useMemo(
    () => Object.keys(MILENIUM_PREVIEW_DATASETS),
    [],
  );
  const [game, setGame] = React.useState<string>(DEFAULT_MILENIUM_GAME);
  const [mode, setMode] = React.useState<string>(
    MILENIUM_PREVIEW_DATASETS[DEFAULT_MILENIUM_GAME].defaultMode,
  );

  React.useEffect(() => {
    const matchedGame = games.find((entry) => activeGame.startsWith(entry));
    if (!matchedGame || matchedGame === game) {
      return;
    }

    setGame(matchedGame);
  }, [activeGame, game, games]);

  const preview =
    MILENIUM_PREVIEW_DATASETS[game] ??
    MILENIUM_PREVIEW_DATASETS[DEFAULT_MILENIUM_GAME];
  const modes = Object.keys(preview.datasets);

  React.useEffect(() => {
    setMode(preview.defaultMode);
  }, [game, preview.defaultMode]);

  const config = preview.datasets[mode] ?? preview.datasets[preview.defaultMode];

  const memoizedWindow = React.useMemo(
    () => <MileniumWindow {...config} />,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [config]
  );

  return (
    <div
      id="features"
      className="flex flex-col items-center text-center py-28 z-10"
    >
      <WordFadeIn
        className="text-3xl md:text-3xl mb-5"
        words={`lumin.rest features:`}
        inView
      />

      <BlurFade inViewMargin="0px" inView>
        <div className="w-full overflow-x-auto px-4">
          <div className="mx-auto w-[700px] min-w-[700px] max-w-none">
            {memoizedWindow}
          </div>
        </div>

        <ModeSelection
          game={game}
          value={mode}
          modes={modes}
          games={games}
          setGame={setGame}
          setValue={setMode}
        />
      </BlurFade>
    </div>
  );
}
