export function formatReport(rows, options = {}) {
  const output = options.output ?? 'table';
  if (output === 'json') return JSON.stringify(rows);
  return rows.map((r) => `${r.name}\t${r.value}`).join('\n');
}
