# DFH AutoLab Development Executor

This private repository is reserved for governed development-time execution of generated software candidates from the DFH Autonomous Software Lab.

It is not a production hosting repository and is not the final hardened isolation boundary.

Execution policy:
- candidates are written only under `.autolab-runs/<execution-id>/`
- GitHub-hosted runners are ephemeral development runners
- repository credentials are not persisted into candidate workspaces
- no application secrets are injected by default
- typecheck, build, lint, and tests must emit evidence before promotion
- failed runs remain failed and require repair/reverification
