export function formatReport(rows, options = {}) {
  const format = options.format ?? 'table';
  const limit = options.limit ?? 0;
  const shown = limit > 0 ? rows.slice(0, limit) : rows;
  if (format === 'json') return JSON.stringify(shown);
  if (format === 'csv') return shown.map((r) => `${r.name},${r.value}`).join('\n');
  return shown.map((r) => `${r.name}\t${r.value}`).join('\n');
}
