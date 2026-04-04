# Domain Model — Benefits AI Workspace

## Entities

### Company
- Represents an employer that offers benefit plans to its employees.
- Has many employees.
- Offers many plans (many-to-many via CompanyPlan).
- **Fields:** id (uuid), name, ein (unique), createdAt, updatedAt

### Employee
- Belongs to one company.
- Can enroll in multiple plans offered by their company.
- **Fields:** id (uuid), companyId (FK), name, email (unique), password (hashed), role (enum), createdAt, updatedAt
- **Roles:** company_admin, employee

### Plan
- A benefit product (health, dental, vision, life insurance, etc.).
- Can be offered by multiple companies.
- Has a type (health, dental, vision, life).
- **Fields:** id (uuid), name, type (enum), availableTiers (enum set), description (nullable), createdAt, updatedAt

### CompanyPlan
- Join table between Company and Plan.
- Represents which plans a company offers.
- **Fields:** id (uuid), companyId (FK), planId (FK), createdAt

### Enrollment
- Tracks an employee's participation in a plan.
- An employee can only enroll in plans their company offers.
- One active plan per type per employee.
- Points to CompanyPlan (not Plan directly) to enforce that employees can only enroll in plans their company offers.
- **Fields:** id (uuid), employeeId (FK), companyPlanId (FK), status (enum), coverageTier (enum), enrollmentDate, effectiveDate, terminationDate (nullable), createdAt, updatedAt

#### Enrollment Enums
- **Status:** pending, active, cancelled
- **Coverage tier:** individual, individual_spouse, individual_children, family

### RefreshToken
- Stores refresh tokens for JWT authentication.
- Linked to an employee. Deletable for revocation.
- **Fields:** id (uuid), employeeId (FK), token (unique), expiresAt, createdAt

## Relationships

- Company 1 ──── N Employee
- Company N ──── N Plan (via CompanyPlan)
- Employee N ──── N Plan (via Enrollment → CompanyPlan)

## Business Rules

- An employee belongs to exactly one company.
- An employee can only enroll in plans offered by their company.
- An employee can have only one active enrollment per plan type.
- Enrollment status lifecycle: pending → active → cancelled.
- An employee's chosen coverage tier must be in the plan's available tiers.
- All IDs are UUIDs (safe for public APIs, compatible with distributed services).
- Employee uniqueness is based on email (no SSN stored).
- Authentication uses JWT with access token (15min, stateless) + refresh token (7 days, stored in DB).
- No platform admin role — only company_admin and employee (both belong to a company).

## AI Layer (future)

- Plan documents (PDFs) will be ingested and indexed for RAG.
- Employees can ask natural language questions about their coverage.
- The system can recommend plans based on employee needs.
