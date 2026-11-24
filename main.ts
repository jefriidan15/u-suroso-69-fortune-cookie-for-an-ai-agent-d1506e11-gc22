import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

// Deterministic: one fixed fortune, no clock, no randomness, no env reads.
const FORTUNE = 'Your next run will be declared a success by a human who never read the logs.';

const outPath = process.argv[2] || '/output/entry.txt';
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, FORTUNE, 'utf8');
