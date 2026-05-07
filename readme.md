# SAP CAP Task Management Service

A small enterprise-style task management backend service built with SAP Cloud Application Programming Model (CAP).

The project was created to explore SAP’s enterprise cloud application ecosystem, including CDS domain modeling, OData services, SQLite integration, and service-layer business logic.

---

# Project Overview

This system represents an internal task tracking service for enterprise teams.

Employees can:

- Create and manage tasks
- Assign tasks to employees
- Track task status and priority
- Organize tasks under projects

The application exposes OData APIs through SAP CAP and demonstrates service-oriented backend development patterns commonly used in enterprise applications.

---

# Tech Stack

- SAP CAP (Cloud Application Programming Model)
- Node.js
- CDS (Core Data Services)
- SQLite
- OData v4

---

# Features

## Domain Modeling

Implemented enterprise-style domain models using CDS:

- Employees
- Projects
- Tasks

## OData APIs

Exposed OData APIs automatically using SAP CAP services.

Sample endpoints:

```http
GET /odata/v4/task/Tasks
GET /odata/v4/task/Tasks?$expand=assignee,project
GET /odata/v4/task/Tasks?$filter=status eq 'OPEN'
```

## Business Logic

Implemented service-layer validation logic:

- Validate task status values
- Validate task priority values
- Set default task status and priority

## Data Relationships

Implemented entity associations:

- Tasks → Employees
- Tasks → Projects

## Sample Data

Integrated SQLite-based local persistence with CSV seed data.

---

# Project Structure

```text
db/
 ├── schema.cds
 └── data/

srv/
 ├── task-service.cds
 └── task-service.js
```

---

# Architecture

The project follows a simple service-oriented architecture:

- CDS models define the domain structure
- Service projections expose OData APIs
- SQLite provides lightweight local persistence
- Service hooks implement business validation logic

---

# Running the Project

## Install dependencies

```bash
npm install
```

## Start the CAP server

```bash
cds watch --in-memory
```

Server runs on:

```text
http://localhost:4004
```

---

# What I Learned

- SAP CAP project structure
- CDS-based domain modeling
- OData service exposure
- SQLite integration in CAP
- Service-layer validation hooks
- Enterprise-style backend service design
