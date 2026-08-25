export function formatReport(rows, options = {}) {
  const {
    format = 'table',
    sortBy = 'name',
    descending = false,
    includeHeader = false,
    includeSummary = false,
  } = options;

  if (!Array.isArray(rows)) {
    throw new TypeError('rows must be an array');
  }

  const data = [...rows].sort((a, b) => {
    const left = a[sortBy];
    const right = b[sortBy];

    if (left === right) return 0;
    return (left > right ? 1 : -1) * (descending ? -1 : 1);
  });

  if (format === 'json') {
    const result = {
      rows: data,
      count: data.length,
    };

    if (includeSummary) {
      result.total = data.reduce(
        (sum, row) => sum + Number(row.value || 0),
        0
      );
    }

    return JSON.stringify(result, null, 2);
  }

  if (format === 'csv') {
    const lines = [];

    if (includeHeader) {
      lines.push('name,value');
    }

    lines.push(
      ...data.map((row) => `"${row.name}","${row.value}"`)
    );

    if (includeSummary) {
      const total = data.reduce(
        (sum, row) => sum + Number(row.value || 0),
        0
      );
      lines.push(`"Total","${total}"`);
    }

    return lines.join('\n');
  }

  const lines = [];

  if (includeHeader) {
    lines.push('Name\tValue');
  }

  lines.push(
    ...data.map((row) => `${row.name}\t${row.value}`)
  );

  if (includeSummary) {
    const total = data.reduce(
      (sum, row) => sum + Number(row.value || 0),
      0
    );
    lines.push(`Total\t${total}`);
  }

  return lines.join('\n');
}
