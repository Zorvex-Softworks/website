import { BlurFade } from "@/components/magicui/blur-fade";
import DotPattern from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckIcon, ExternalLinkIcon } from "lucide-react";

function Perk({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <CheckIcon className="h-4 w-4 mt-0.5 shrink-0 text-[#431296]" />
      <span>{children}</span>
    </li>
  );
}

export default function Key() {
  return (
    <main className="overflow-x-hidden">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-50"
        )}
      />

      <div className="min-h-screen w-full flex items-center justify-center px-4">
        <div className="flex flex-col items-center gap-6">
          <BlurFade delay={0.15} inView>
            <div className="text-center mb-2">
              <h1 className="text-2xl font-bold">Key System</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Choose how you want to access Zorvex
              </p>
            </div>
          </BlurFade>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Free Key Card */}
            <BlurFade delay={0.25} inView>
              <Card className="w-[300px] flex flex-col">
                <CardHeader>
                  <CardTitle>Free Key</CardTitle>
                  <CardDescription>Temporary access via key system</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <Perk>12 hour access to Zorvex</Perk>
                    <Perk>All supported games</Perk>
                    <Perk>No payment required</Perk>
                  </ul>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://discord.gg/3fPEtASDsg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full cursor-pointer">
                      Get Free Key
                      <ExternalLinkIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </BlurFade>
          </div>
        </div>
      </div>
    </main>
  );
}
