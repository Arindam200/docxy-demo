# demo-report

A tiny reporting tool used to exercise docxy.

```bash
npx demo-report --format json
```

See [docs/cli.md](./docs/cli.md).

## Local backend and webhooks

Use the single launcher to run the backend and forward Smee webhook deliveries
to it. Set the values in [`.env.services.example`](./.env.services.example),
then run:

```bash
source .env.services
./scripts/start-all.sh
```
