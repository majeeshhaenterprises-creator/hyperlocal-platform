# Tech Stack

Planned technologies for the HyperLocal delivery platform. Final choices may be adjusted during Phase 0 scaffolding; changes should be recorded here with rationale.

## Repository Layout

| Area        | Role                                      |
|-------------|-------------------------------------------|
| `apps/`     | Customer, merchant, rider, and admin UIs  |
| `backend/`  | REST/GraphQL API, workers, domain modules |
| `docs/`     | Architecture decisions, API reference     |
| `design/`   | Figma exports, tokens, UX specifications  |
| `assets/`   | Images, icons, fonts, marketing files     |

## Backend (Planned)

| Layer            | Technology (planned)     | Notes                                      |
|------------------|--------------------------|--------------------------------------------|
| Runtime          | Node.js (LTS)            | Long-term support track                    |
| Language         | TypeScript               | Shared types with clients where applicable |
| Framework        | NestJS or Fastify        | To be decided at scaffold time             |
| API              | REST (+ OpenAPI)         | GraphQL optional for admin/analytics       |
| Validation       | Zod or class-validator   | Request/response schemas                   |
| ORM              | Prisma or TypeORM        | Migrations in `backend/database/`          |
| Database         | PostgreSQL               | Primary transactional store                |
| Cache            | Redis                    | Sessions, rate limits, geo cache           |
| Queue            | BullMQ or similar        | Async jobs: notifications, dispatch        |
| Real-time        | WebSockets / SSE         | Order and rider tracking                   |
| Auth             | JWT + refresh tokens     | Role-based access control (RBAC)           |
| File storage     | S3-compatible object store | Product images, documents                |

## Frontend (Planned)

| App type   | Technology (planned) | Notes                    |
|------------|----------------------|--------------------------|
| Web        | Next.js (React)      | SSR/SSG for SEO pages    |
| Mobile     | React Native or Expo | Shared logic with web    |
| Admin      | Next.js or React SPA | Internal operations    |
| Styling    | Tailwind CSS         | Design tokens from `design/` |
| State      | TanStack Query + Zustand | Server vs client state |

## Infrastructure (Planned)

| Concern        | Technology (planned)   |
|----------------|------------------------|
| Containers     | Docker                 |
| Orchestration  | Kubernetes or managed PaaS |
| CI/CD          | GitHub Actions         |
| Monitoring     | OpenTelemetry + Grafana or cloud-native |
| Logging        | Structured JSON logs   |
| Secrets        | Vault or cloud secret manager |

## Development Tooling (Planned)

- **Package manager:** pnpm (workspaces for monorepo)
- **Linting:** ESLint + Prettier
- **Testing:** Vitest or Jest, Supertest for API
- **Git hooks:** Husky + lint-staged
- **API docs:** OpenAPI (Swagger) generated from code or spec

## Backend Directory Conventions

```
backend/
├── src/        # Application entry, bootstrap, global middleware
├── modules/    # Domain modules (orders, users, merchants, etc.)
├── config/     # Environment and feature configuration
├── database/   # Migrations, seeds, schema definitions
└── common/     # Shared utilities, DTOs, guards, decorators
```

## Decision Log

| Date       | Decision              | Status   |
|------------|-----------------------|----------|
| Init       | Monorepo layout       | Accepted |
| Init       | PostgreSQL + Redis    | Proposed |
| Init       | TypeScript throughout | Proposed |

Add new rows when stack choices are finalized during scaffolding.
