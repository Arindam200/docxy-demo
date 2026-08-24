import { formatReport } from './report.js';

export function run(argv) {
  const formatIndex = argv.indexOf('--format');
  if (argv.includes('--output')) {
    throw new Error('--output was renamed to --format in 2.0.0');
  }
  const format = formatIndex === -1 ? 'table' : argv[formatIndex + 1];
  return formatReport(load(), { format });
}
