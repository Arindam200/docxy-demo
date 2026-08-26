# CLI reference

The `report` command prints a summary of the current dataset.

## Configuration

Pass `--output json` to get machine-readable output. The default is
`--output table`, which prints an aligned text table.

| Flag | Default | Description |
| --- | --- | --- |
| `--output` | `table` | Output format: `table` or `json` |
| `--limit` | `0` | Cap the number of rows in the output. `0` means no limit |

See the [getting started guide](./guide.md) for a full walkthrough.
