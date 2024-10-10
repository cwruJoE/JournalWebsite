#!/bin/bash
# commit_protect.sh
# Prevents direct commits to the main and dev branches

# Get the current branch name
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Prevent commits to main or dev
if [ "$current_branch" = "main" ] || [ "$current_branch" = "dev" ]; then
  echo "Direct commits to '$current_branch' are not allowed. Please use a feature branch."
  exit 1
fi