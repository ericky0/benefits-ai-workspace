# Benefits AI Workspace

## About
AI-native workspace for employee benefits — inspired by Pasito.ai.
Portfolio project for AI/ML Engineer role: document ingestion, multi-agent systems, RAG pipelines.

## Repository
- **GitHub:** github.com/ericky0/benefits-ai-workspace
- **Structure:** Monorepo (Yarn workspaces)

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Main API | Node.js + NestJS + TypeScript |
| AI Engine | Python + FastAPI |
| Frontend | Next.js + React |
| Database | MySQL |
| Vector DB | Pinecone |
| AI Agents | LangGraph + Anthropic SDK |
| Monitoring | Langfuse |
| Infra | AWS + Pulumi |

## Tooling
- **Node:** v24.14.0 LTS (locked via .nvmrc)
- **Package manager (Node):** Yarn
- **Package manager (Python):** Poetry
- **Linting:** ESLint + Prettier (Node), Ruff (Python)
- **Commits:** Conventional Commits (feat:, fix:, chore:, etc.)

## Modules / Roadmap (tracked via GitHub Issues)
- [ ] #1 — Project setup: monorepo structure, tooling and configs
- [ ] #2 — API: NestJS REST API with MySQL integration
- [ ] #3 — AI Engine: FastAPI service setup
- [ ] #4 — AI Engine: Document ingestion pipeline
- [ ] #5 — AI Engine: LLM integration with Anthropic SDK
- [ ] #6 — AI Engine: RAG system with Pinecone
- [ ] #7 — AI Engine: Multi-agent system with LangGraph
- [ ] #8 — AI Engine: Evaluation and monitoring with Langfuse
- [ ] #9 — Web: Next.js frontend
- [ ] #10 — Infra: AWS deployment with Pulumi
- [ ] #11 — Docs: Professional README

## Conventions
- Conventional Commits (feat:, fix:, chore:, etc.)
- Each commit references the related GitHub Issue (e.g., feat(api): add benefits CRUD #2)
- Code comments should be concise and professional
