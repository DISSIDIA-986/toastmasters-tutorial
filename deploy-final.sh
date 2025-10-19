#!/bin/bash

cd /Users/niuyp/Documents/github.com/toastmasters-tutorial

# Add and commit package-lock.json
git add package-lock.json
git commit -m "Update package-lock.json" || echo "No changes to commit"

# Push
git push origin main

# Run deploy
bash scripts/deploy.sh

echo "Done!"
