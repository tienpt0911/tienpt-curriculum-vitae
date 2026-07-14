---
type: project
created: 2026-05-25
updated: 2026-05-25
---

# Project Conventions

## Git Workflow
- Always create a new dedicated branch for major code changes.
- Branch name format should follow: `feature/[task-slug]` or `fix/[bug-slug]`.

## GAS Deployment Workflow
- Before pushing code to Google Apps Script (`clasp push`), always bump the `APP_VERSION` variable in `versioning.gs` to the current datetime string.
- If deploying a new web app version, use `npx clasp deploy` with the latest active Deployment ID or use the deployment ID requested by the project constraints. Ensure `appsscript.json` doesn't block deployment due to workspace domain restrictions (e.g., use `DOMAIN` access instead of `ANYONE_ANONYMOUS` if restricted).
