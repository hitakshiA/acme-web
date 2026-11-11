#!/bin/sh
# Passes when the branch changes CHANGELOG.md; the gate only runs when app/ or components/ changed.
base=$(git for-each-ref --format='%(refname)' refs/remotes/origin/guardrails-check refs/remotes/origin/main | head -n 1)
if git diff --name-only "$base"...HEAD | grep -qx CHANGELOG.md; then
  echo "CHANGELOG.md has a line for this change."
  exit 0
fi
echo "CHANGELOG.md has no line for this change."
exit 1
