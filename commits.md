# Conventional Commit Reference

### 1. `feat`:
A new feature.
- **Example**: `feat(auth): add user login feature`
- **Example**: `feat(ui): implement dark mode theme`
- **Example**: `feat(api): add GraphQL support`
- **Example**: `feat(component): add call to action links component`

### 2. `fix`:
A bug fix.
- **Example**: `fix(api): resolve timeout issue`

### 3. `chore`:
Routine tasks like refactoring, dependency updates, or project maintenance.
- **Example**: `chore(deps): update react to version 17`

### 4. `docs`:
Documentation changes.
- **Example**: `docs(readme): update API documentation`

### 5. `style`:
Changes that don’t affect the code’s behavior (e.g., formatting, white-space, missing semi-colons).
- **Example**: `style(ui): adjust button margin and padding`

### 6. `refactor`:
Code changes that neither fix a bug nor add a feature (e.g., refactoring).
- **Example**: `refactor(auth): simplify authentication logic`

### 7. `perf`:
Changes that improve performance.
- **Example**: `perf(api): optimize database queries for faster response`

### 8. `test`:
Adding or updating tests.
- **Example**: `test(unit): add tests for user login feature`

### 9. `build`:
Changes that affect the build system or external dependencies (e.g., updating Webpack or npm).
- **Example**: `build(webpack): enable code-splitting for performance`

### 10. `ci`:
Changes to your continuous integration configuration (e.g., GitHub Actions, CircleCI).
- **Example**: `ci(travis): update node.js version in CI config`

### 11. `revert`:
Reverting a previous commit.
- **Example**: `revert: revert feat(auth): add user login feature`

---

## Breaking Changes

If the commit introduces a breaking change, you must add a `BREAKING CHANGE` section.

- **Example**: `feat(api): upgrade API to use GraphQL`



## Manually Triggering a Version Bump with Standard-Version

If your previous commits don't follow the conventional commit format, you can manually trigger version bumps using the following commands:

- **Patch bump** (e.g., `1.0.0` → `1.0.1`):
  ```bash
  npm run release -- --release-as patch
- **Minor bump** (e.g., `1.0.0` → `1.1.0`):
  ```bash
  npm run release -- --release-as major
- **Minor bump** (e.g., `1.0.0` → `2.0.0`):
  ```bash
  npm run release -- --release-as minor