# CLI reference

The `report` command prints a summary of the current dataset.

## Configuration

Pass `--format json` to get machine-readable output. The default is
`--format table`, which prints an aligned text table. Use `--format csv`
for comma-separated output.

| Flag | Default | Description |
| --- | --- | --- |
| `--format` | `table` | Output format: `table`, `json`, or `csv` |
| `--limit` | `0` | Cap the number of rows in the output. `0` means no limit |

See the [getting started guide](./guide.md) for a full walkthrough.
