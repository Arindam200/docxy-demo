import { formatReport } from './report.js';

export function run(argv) {
  const outputIndex = argv.indexOf('--output');
  const output = outputIndex === -1 ? 'table' : argv[outputIndex + 1];
  return formatReport(load(), { output });
}
