# HyperLocal

A production-grade hyperlocal delivery platform connecting customers, local merchants, and delivery partners within defined geographic service areas.

## Vision

HyperLocal exists to make same-day, on-demand commerce work reliably at the neighborhood level. We aim to give local businesses modern ordering and fulfillment tools, give customers a fast and transparent delivery experience, and give riders fair, efficient dispatch — all on a single platform built for scale, security, and long-term maintainability.

The platform is organized as a modular monorepo: client applications under `apps/`, API and domain logic under `backend/`, and supporting material under `docs/`, `design/`, and `assets/`.

## Features

Planned capabilities across the product lifecycle:

| Area | Capabilities |
|------|--------------|
| **Customers** | Browse local stores, cart & checkout, order tracking, notifications |
| **Merchants** | Onboarding, catalog management, order handling, service-area configuration |
| **Riders** | Assignment & dispatch, real-time location, delivery lifecycle updates |
| **Operations** | Admin dashboard, reporting, support tools, audit logs |
| **Platform** | Auth & RBAC, payments, geofencing, async jobs, real-time tracking |

> **Status:** Repository initialization — structure and documentation are in place; feature implementation has not started.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Backend runtime** | Node.js (LTS), TypeScript |
| **Backend framework** | NestJS or Fastify (to be finalized at scaffold) |
| **API** | REST (+ OpenAPI); GraphQL optional for admin/analytics |
| **Database** | PostgreSQL (primary), Redis (cache, sessions, rate limits) |
| **ORM** | Prisma or TypeORM |
| **Queue** | BullMQ or similar |
| **Real-time** | WebSockets / SSE |
| **Auth** | JWT + refresh tokens, RBAC |
| **Web & admin** | Next.js (React), Tailwind CSS |
| **Mobile** | Flutter |
| **State management** | TanStack Query + Zustand (web) |
| **Infrastructure** | Docker, GitHub Actions, OpenTelemetry |
| **Tooling** | pnpm workspaces, ESLint, Prettier, Vitest/Jest, Husky |

## Folder Structure

```
HyperLocal/
├── apps/                 # Client applications
│   ├── web/              # Customer-facing Next.js app (planned)
│   ├── mobile/           # Flutter customer app (planned)
│   ├── merchant/         # Merchant partner app (planned)
│   ├── rider/            # Delivery partner app (planned)
│   └── admin/            # Operations admin panel (planned)
├── backend/              # API server and domain modules
│   ├── src/              # Entry point, bootstrap, global middleware
│   ├── modules/          # Domain modules (orders, users, merchants, …)
│   ├── config/           # Environment and feature configuration
│   ├── database/         # Migrations, seeds, schema definitions
│   └── common/           # Shared utilities, DTOs, guards, decorators
├── docs/                 # Architecture, API specs, runbooks
├── design/               # UI/UX artifacts, wireframes, brand guidelines
├── assets/               # Static media, icons, marketing materials
├── README.md
├── PROJECT_RULES.md
├── ROADMAP.md
└── TECH_STACK.md
```

## Development Rules

All contributors should follow [PROJECT_RULES.md](./PROJECT_RULES.md). Summary:

### Architecture

- Keep business domains in `backend/modules/` with clear boundaries and no circular dependencies.
- Separate HTTP/routing, domain logic, persistence, and infrastructure.
- Put environment-specific values in `backend/config/`, not in source.
- Define API contracts before client work; plan for versioning on breaking changes.

### Code & Git

- TypeScript for backend and application code; prefer explicit types over `any`.
- Branch prefixes: `feature/`, `fix/`, `chore/`, `docs/`.
- Commits: imperative mood, concise subject; link issues when applicable.
- Pull requests require description, linked issue, and test plan before merge.
- `main` stays deployable; all work merges via reviewed PRs.

### Security & Quality

- Never commit secrets — use `.env` locally and a secret manager in production.
- Authenticate and authorize every protected endpoint; validate all external input.
- Unit tests for domain logic; integration tests for APIs; E2E for critical journeys.
- No merge without passing CI once CI is configured.

## Roadmap

| Phase | Focus |
|-------|-------|
| **Phase 0 — Foundation** *(current)* | Repo structure, backend scaffold, DB schema, CI/CD, design system |
| **Phase 1 — Core Platform** | Auth, merchant onboarding, catalog, geofencing, basic admin |
| **Phase 2 — Order & Fulfillment** | Cart, checkout, order lifecycle, dispatch, tracking, notifications |
| **Phase 3 — Payments & Operations** | Payments, refunds, fees, reporting, support & audit tools |
| **Phase 4 — Client Applications** | Customer, merchant, rider, and admin apps |
| **Phase 5 — Scale & Polish** | Performance, multi-zone support, promotions, localization, production hardening |

Full checklist and out-of-scope items: [ROADMAP.md](./ROADMAP.md).
