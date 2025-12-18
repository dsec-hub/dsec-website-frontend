# Contributing to the Deakin Software Engineering Club Website

Please read this guide before contributing to ensure a smooth and consistent workflow.

## Workflow

This project uses a fork-based workflow.

- Do not push directly to `main`
- Always create a new branch from `main`
- Submit all changes via Pull Requests

## Branch Naming Convention

Create branches from main using one of the following formats:

    feature/: New features or enhancements
    fix/: Resolving bugs
    hotfix/: Critical production fixes that need immediate deployment
    refactor/: Code improvements that do not change functionality
    docs/: Changes strictly related to documentation
    chore/: Routine tasks like updating dependencies or configuration
    test/: Adding or updating test cases

Examples:

    fix/broken-nav-links
    feature/add-signup-form
    docs/update-readme

## Commit Message Guidelines

Write clear, concise commit messages. Examples:

    Fix incorrect navigation link
    Remove transition grid after animation ends
    Add footer social links

## Code Style & Quality

- This project uses ESLint and Prettier
- Ensure your code follows the existing style
- Run the linter before submitting a PR:
    ```bash
    npm run lint
    ```

## Pull Requests

Before starting work on a pull request, please **open an issue first** to discuss the change.

1. Create a new branch from `main`:

    ```bash
    git checkout -b your-branch-name
    ```

2. Make your changes.

3. Stage and commit.

    ```bash
    git add .
    git commit -m "Describe your change"
    ```

4. Push your branch to your fork:

    ```bash
    git push origin your-branch-name
    ```

5. Open a Pull Request targeting the `main` branch of the original repository.

Thank you for your time and effort! ❤️
