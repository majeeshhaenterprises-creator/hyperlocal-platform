# Project Rules

Governance and engineering standards for the HyperLocal delivery platform.

## Purpose

These rules keep the codebase consistent, secure, and maintainable as the team and feature set grow. All contributors should read this document before writing code.

## Architecture Principles

1. **Modular boundaries** — Business domains live in `backend/modules/`. Modules expose clear interfaces and avoid circular dependencies.
2. **Separation of concerns** — HTTP/routing, domain logic, persistence, and infrastructure remain in distinct layers.
3. **Configuration over hardcoding** — Environment-specific values belong in `backend/config/`, not in source files.
4. **API-first** — Backend contracts are defined before client implementation; breaking changes require versioning or migration plans.
5. **Fail safely** — Validate input at boundaries; never expose internal errors or secrets to clients.

## Code Standards

- Use TypeScript for backend and application code unless a documented exception exists.
- Prefer explicit types over `any`.
- Name files and symbols consistently within each module (e.g., `user.service.ts`, `order.repository.ts`).
- Keep functions focused; extract helpers only when reuse is clear.
- Write self-documenting code; add comments only for non-obvious business rules.

## Git & Workflow

- **Branch naming:** `feature/`, `fix/`, `chore/`, `docs/` prefixes (e.g., `feature/order-checkout`).
- **Commits:** Imperative mood, concise subject; reference issue IDs when applicable.
- **Pull requests:** Require description, linked issue, and test plan before merge.
- **Main branch:** Always deployable; feature work merges via reviewed PRs.

## Security

- Never commit secrets, API keys, or credentials. Use `.env` locally and secure secret management in production.
- Authenticate and authorize every protected endpoint.
- Sanitize and validate all external input.
- Log security-relevant events without logging PII or payment data.

## Testing

- Unit tests for domain logic and utilities.
- Integration tests for API endpoints and database interactions.
- End-to-end tests for critical user journeys (order placement, payment, delivery tracking).
- No merge without passing CI checks once CI is configured.

## Documentation

- Update `docs/` when architecture or APIs change.
- Keep `ROADMAP.md` aligned with planned and completed work.
- Document setup steps in README or dedicated guides as services are added.

## Review Checklist

Before approving a change:

- [ ] Matches module boundaries and naming conventions
- [ ] No secrets or debug code left in diff
- [ ] Error handling and validation at boundaries
- [ ] Tests added or updated where behavior changed
- [ ] Documentation updated if contracts or setup changed
