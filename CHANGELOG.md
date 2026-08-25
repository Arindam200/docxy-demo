# Changelog

All notable changes to this project are documented here.

## [Unreleased]

### Changed

- Renamed the `--output` flag to `--format` and added a `csv` format; passing `--output` now throws an error — update your invocations and switch `options.output` to `options.format` in `formatReport` calls

## [1.0.0]

### Added

- Initial release with the `report` command
