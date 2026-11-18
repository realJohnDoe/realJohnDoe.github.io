# CLAUDE.md

## Git workflow

- Before pushing to a feature branch, check whether an open pull request already
  exists for it. If one is open, push to that branch so the commit lands in the
  existing PR. If there is no open PR for the branch (e.g. it was already merged),
  open a new pull request instead of assuming the existing one will pick up the change.
- The app lives in `app/` and uses npm. Before pushing, run the checks CI
  runs there: `npm ci`, `npm run lint`, `npm run check`, `npm run build`.

## Workshop

This repo is dispatched by the workshop. Before creating, labelling or
ordering an issue, or opening a PR, follow the workshop plugin's
`workshop-conventions` skill. It also covers when to open a PR and adding trace maps
to it.
