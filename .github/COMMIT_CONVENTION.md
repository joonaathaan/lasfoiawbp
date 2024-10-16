# Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to structure our commit messages. This ensures consistency and enables automation in our workflow.

## Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

| Type       | Description                                                                                                      |
|------------|------------------------------------------------------------------------------------------------------------------|
| `feat`     | A new feature                                                                                                     |
| `fix`      | A bug fix                                                                                                         |
| `docs`     | Documentation only changes                                                                                        |
| `style`    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)          |
| `refactor` | A code change that neither fixes a bug nor adds a feature                                                       |
| `perf`     | A code change that improves performance                                                                           |
| `test`     | Adding missing or correcting existing tests                                                                       |
| `chore`    | Changes to the build process or auxiliary tools and libraries such as documentation generation                   |

### Scope (Optional)

The scope should be a noun describing a section of the codebase surrounded by parentheses, e.g., `parser`, `api`, `ui`, etc.

**Example:**
```
feat(parser): add ability to parse arrays
```
### Description

- Use the imperative mood (e.g., "add", "fix", "change").
- Do not capitalize the first letter.
- Do not end the description with a period.


```
✔ GOOD
fix(auth): handle null pointer exception

✘ BAD
Fixed authentication module.
```

### Body (Optional)

Provide a more detailed explanation of the commit, including **what** and **why** vs. **how**.

**Example:**
```
fix(auth): handle null pointer exception
```
Ensure that the user object is not null before accessing its properties to prevent crashes during login.

### Footer (Optional)

Include any information about breaking changes or issues closed.

**Breaking Changes:**
```
BREAKING CHANGE: drop support for Node 10
```
**Closes Issues:**
```
Closes #123, #456
```
### Examples

- **Adding a new feature:**
```
feat(user): add login functionality
```

- **Fixing a bug:**
```
fix(payment): correct calculation of tax
```

- **Updating documentation:**
```
docs(readme): update installation instructions
```

- **Refactoring code:**
```
refactor(utils): simplify string manipulation functions
```
- **Performance improvement:**
```
perf(database): optimize query for fetching user data
```
## Learn More

For a more comprehensive understanding of Conventional Commits, including detailed explanations and advanced usage examples, please visit the [Conventional Commits official website](https://www.conventionalcommits.org/en/v1.0.0/).
