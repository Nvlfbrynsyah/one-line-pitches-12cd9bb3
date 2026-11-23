// make.fun pitch entry — one sentence, <=240 chars. Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PITCH =
  "You keep saying you'd build that app someday, so tonight just tell an AI agent on make.fun what you want in plain words - tomorrow you tap through the first version, and it's still your idea.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'entry.txt'), `${PITCH}\n`, 'utf8');
