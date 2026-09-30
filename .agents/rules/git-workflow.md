# Project Git & Branching Rules

> **Mandatory Git Workflow Guidelines for ByteSpace**

1. **Public Repository**:
   - The repository must remain public on GitHub: `https://github.com/jahan-d/byte-space`.

2. **Branching Strategy (Never commit directly to main)**:
   - `main` branch is reserved as the production baseline.
   - All feature work, fixes, and enhancements must be developed on separate dedicated feature branches (e.g. `feature/landing-and-auth` or `feature/<feature-name>`).
   - Work must never be committed directly to `main` or `master`.

3. **Pull Requests (PR)**:
   - All changes must be merged via Pull Request from the feature branch into `main`.
   - Maintain clean, descriptive commit messages following Conventional Commits format (`feat:`, `fix:`, `docs:`, `chore:`).
