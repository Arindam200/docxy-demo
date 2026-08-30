# CLI reference

The `report` command prints a summary of the current dataset.

## Configuration

Pass `--format json` to get machine-readable output. The default is
`--format table`, which prints an aligned text table. Use `--format csv`
for comma-separated output.

Pass `--limit N` to cap the report at the first N rows. The default is
`--limit 0`, which means no cap.

| Flag | Default | Description |
| --- | --- | --- |
| `--format` | `table` | Output format: `table`, `json`, or `csv` |
| `--limit` | `0` | Maximum number of rows to show; `0` means no limit |

See the [getting started guide](./guide.md) for a full walkthrough.
