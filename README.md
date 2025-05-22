# Next.js Todo Application

A simple Todo application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Add new todos
- Mark todos as completed
- Delete todos
- Responsive design with dark mode support

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lodash](https://lodash.com/) - Utility functions

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/page.tsx` - Home page
- `app/todos/page.tsx` - Todos page with state management
- `app/todos/components/` - Todo components (TodoList, TodoForm)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Dependency Management

This repository uses GitHub's Dependabot to keep dependencies up to date. Dependabot is configured to:

- Check for npm dependency updates weekly
- Create pull requests for new versions
- Group development dependencies together
- Apply security updates automatically

The configuration can be found in `.github/dependabot.yml`.

### Manually Triggering Dependabot

You can manually trigger Dependabot updates in several ways:

1. **GitHub Actions Workflow**:
   - Go to the Actions tab in your repository
   - Select the "Manual Dependabot Run" workflow
   - Click "Run workflow"
   - Select the package ecosystem (npm or github-actions)
   - Click "Run workflow"

2. **Using GitHub CLI**:
   - Ensure GitHub CLI is installed and authenticated
   - Run the provided script:
     ```bash
     .github/scripts/trigger-dependabot.sh
     ```

3. **GitHub UI**:
   - Navigate to Security → Dependabot
   - Click "Check for updates"
