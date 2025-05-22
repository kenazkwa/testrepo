#!/bin/bash

# Script to manually trigger Dependabot using GitHub CLI
# Prerequisites: GitHub CLI (gh) installed and authenticated

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
  echo "GitHub CLI (gh) is not installed. Please install it first:"
  echo "https://cli.github.com/manual/installation"
  exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
  echo "You are not authenticated with GitHub CLI. Please run 'gh auth login' first."
  exit 1
fi

# Get repository information
REPO_URL=$(git config --get remote.origin.url)
REPO_INFO=${REPO_URL##*github.com[:/]}
REPO_INFO=${REPO_INFO%.git}

# Create Dependabot alert to trigger a scan
echo "Creating issue to trigger Dependabot..."

gh issue create \
  --repo "$REPO_INFO" \
  --title "build(deps): manual dependabot update request" \
  --body "This is a manual trigger for Dependabot to check for dependency updates.

@dependabot merge" \
  --label "dependencies,npm"

echo "Dependabot trigger issue created. Dependabot should run shortly."
echo "You can check the Dependabot tab in your repository's Security section." 