export function formatReport(rows, options = {}) {
  const format = options.format ?? 'table';
  if (format === 'json') return JSON.stringify(rows);
  if (format === 'csv') return rows.map((r) => `${r.name},${r.value}`).join('\n');
  return rows.map((r) => `${r.name}\t${r.value}`).join('\n');
}
