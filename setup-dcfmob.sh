#!/bin/bash

# Setup Script for Creating DCFMOB Repository
# This script helps prepare files for the dcfmob repository

echo "========================================="
echo "DCFMOB Setup Script"
echo "========================================="
echo ""
echo "This script will help you set up a copy of this repository as 'dcfmob'."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found. Please run this script from the repository root."
    exit 1
fi

echo "Step 1: Checking if dcfmob remote exists..."
if git remote | grep -q "dcfmob"; then
    echo "✓ dcfmob remote already exists"
else
    echo "⚠ dcfmob remote not found"
    echo ""
    read -p "Enter the URL for your dcfmob repository (e.g., https://github.com/username/dcfmob.git): " DCFMOB_URL
    
    if [ -n "$DCFMOB_URL" ]; then
        git remote add dcfmob "$DCFMOB_URL"
        echo "✓ Added dcfmob remote: $DCFMOB_URL"
    else
        echo "⚠ No URL provided, skipping remote setup"
    fi
fi

echo ""
echo "Step 2: Would you like to push to dcfmob repository?"
read -p "Push now? (y/n): " SHOULD_PUSH

if [ "$SHOULD_PUSH" = "y" ] || [ "$SHOULD_PUSH" = "Y" ]; then
    echo "Pushing to dcfmob remote..."
    git push dcfmob main
    echo "✓ Pushed to dcfmob repository"
else
    echo "⚠ Skipped pushing. You can push later with: git push dcfmob main"
fi

echo ""
echo "Step 3: Template files have been created:"
echo "  - package.dcfmob.json (template package.json for dcfmob)"
echo "  - README.dcfmob.md (template README for dcfmob)"
echo "  - COPY_TO_DCFMOB.md (detailed instructions)"
echo ""
echo "Next steps:"
echo "1. Clone the dcfmob repository"
echo "2. Copy package.dcfmob.json to package.json in dcfmob repo"
echo "3. Copy README.dcfmob.md to README.md in dcfmob repo"
echo "4. Install dependencies: npm install"
echo "5. Test locally: npm run dev"
echo "6. Commit and push changes"
echo ""
echo "For detailed instructions, see COPY_TO_DCFMOB.md"
echo "========================================="
echo "Setup complete!"
echo "========================================="
