import type { CaseStudy } from "./types";
import kskBeverenApp from "./ksk-beveren-app";
import eduvik from "./eduvik";
import voedselbankGame from "./voedselbank-game";
import digitap from "./digitap";
import beweegBaai from "./beweeg-baai";

export type { CaseStudy, CaseImage } from "./types";

// One file per project in this folder; this list sets the order on /work
// and which project the "Next project" link points to. To add a project:
// create <slug>.ts here, import it, and add it to this list.
export const projects: CaseStudy[] = [kskBeverenApp, eduvik, voedselbankGame, digitap, beweegBaai];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
