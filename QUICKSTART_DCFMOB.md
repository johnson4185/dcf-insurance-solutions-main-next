# Quick Start: Creating DCFMOB Repository

## Fastest Method (3 Steps)

### Step 1: Create New Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `dcfmob`
3. **Important:** Leave "Add README", "Add .gitignore", and "Choose license" UNCHECKED
4. Click "Create repository"

### Step 2: Push This Code
```bash
# In this repository directory
git remote add dcfmob https://github.com/YOUR_USERNAME/dcfmob.git
git push dcfmob main
```

### Step 3: Update Configuration in New Repository
```bash
# Clone the new dcfmob repository
git clone https://github.com/YOUR_USERNAME/dcfmob.git
cd dcfmob

# Copy the template files (assuming you have access to this repo)
# Or manually update the files as shown below
```

**Update package.json:**

Option 1 - Use the template file:
```bash
# If you have access to the original repo with template files
cp /path/to/original/package.dcfmob.json package.json
```

Option 2 - Manual edit:
```bash
# Open package.json and change the name field from
# "dcf-insurance-solutions-nextjs" to "dcfmob"
# You can use any text editor (nano, vim, VS Code, etc.)
```

Option 3 - Using sed (Linux):
```bash
sed -i 's/"name": "dcf-insurance-solutions-nextjs"/"name": "dcfmob"/' package.json
```

Option 4 - Using sed (macOS):
```bash
sed -i '' 's/"name": "dcf-insurance-solutions-nextjs"/"name": "dcfmob"/' package.json
```

**Update README.md:**

Option 1 - Use the template file:
```bash
# If you have access to the original repo with template files
cp /path/to/original/README.dcfmob.md README.md
```

Option 2 - Manual edit:
```bash
# Open README.md and change the title from
# "DCF Insurance Solutions - Next.js Application" to
# "DCFMOB - DCF Mobile Insurance Solutions"
# You can use any text editor (nano, vim, VS Code, etc.)
```

**Commit and push:**
```bash
git add package.json README.md
git commit -m "Update configuration for dcfmob"
git push origin main
```

## Done! 🎉

Your dcfmob repository is now ready to use.

## Next Steps
- Install dependencies: `npm install`
- Run locally: `npm run dev`
- Deploy to your hosting platform

## Need More Details?
See `COPY_TO_DCFMOB.md` for comprehensive instructions and alternative methods.

## Using the Setup Script
If you prefer automation, use the included script:
```bash
./setup-dcfmob.sh
```

The script will:
- Help you set up the dcfmob remote
- Push code to the new repository
- Guide you through configuration updates

## Template Files Included
- `package.dcfmob.json` - Ready-to-use package.json
- `README.dcfmob.md` - Ready-to-use README
- `.env.dcfmob.example` - Ready-to-use environment config

Simply rename these files (remove .dcfmob) in your new repository:
```bash
cd /path/to/dcfmob
mv package.dcfmob.json package.json
mv README.dcfmob.md README.md
mv .env.dcfmob.example .env.example
```
