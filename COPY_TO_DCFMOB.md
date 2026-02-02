# Creating a Copy Named "dcfmob"

## Important Note
This guide explains how to create a copy of this repository with the name "dcfmob". The GitHub Copilot agent cannot directly create new repositories due to security constraints, so this process requires manual steps.

## Option 1: Fork and Rename (Recommended)

### Step 1: Create a New Repository
1. Go to GitHub and create a new repository named `dcfmob`
2. Do **not** initialize it with README, .gitignore, or license (we'll push the existing code)

### Step 2: Push This Code to the New Repository
```bash
# Clone this repository if you haven't already
git clone https://github.com/johnson4185/dcf-insurance-solutions-main-next.git
cd dcf-insurance-solutions-main-next

# Add the new repository as a remote
git remote add dcfmob https://github.com/YOUR_USERNAME/dcfmob.git

# Push all branches and tags
git push dcfmob main
git push dcfmob --tags
```

### Step 3: Update Configuration Files
After pushing to the new repository, update the following files in the `dcfmob` repository:

#### 1. Update `package.json`:
```json
{
  "name": "dcfmob",
  "description": "DCF Mobile - Enterprise insurance software platform",
  "version": "1.0.0",
  ...
}
```

#### 2. Update `README.md`:
- Change the title to "DCF Mobile" or "DCFMOB"
- Update any repository URLs
- Update documentation to reflect the new repository name

#### 3. Update `.env.example` (if needed):
```env
NEXT_PUBLIC_API_URL=your_api_url_for_dcfmob
NEXT_PUBLIC_SITE_URL=your_dcfmob_site_url
```

## Option 2: Use GitHub's Template Feature

### Step 1: Make This a Template Repository
1. Go to repository Settings
2. Check "Template repository"
3. Save changes

### Step 2: Use Template to Create dcfmob
1. Click "Use this template" button
2. Name the new repository "dcfmob"
3. Choose visibility settings
4. Click "Create repository"

### Step 3: Apply Configuration Changes
Follow Step 3 from Option 1 above to update the configuration files.

## Option 3: Manual Export and Import

### Step 1: Export Repository
```bash
# Create a bundle of the repository
git bundle create dcf-repo.bundle --all
```

### Step 2: Create New Repository
1. Create new repository named `dcfmob` on GitHub
2. Clone the empty repository locally

### Step 3: Import Bundle
```bash
# Navigate to the new repository
cd dcfmob
git clone dcf-repo.bundle -b main .
git remote set-url origin https://github.com/YOUR_USERNAME/dcfmob.git
git push origin main
```

### Step 4: Apply Configuration Changes
Follow Step 3 from Option 1 above.

## Files That Need Updating

When you create the dcfmob repository, update these files to reflect the new name:

1. **package.json** - Update name, description
2. **README.md** - Update title and references
3. **.env.example** - Update environment variable examples
4. **components.json** - Update if it contains project-specific paths
5. **Any hardcoded references** to the old repository name in:
   - Documentation files
   - Configuration files
   - Source code comments

## Deployment Considerations

If dcfmob is meant to be a mobile-specific version:
- Consider adding mobile-specific configurations
- Update responsive design settings in tailwind.config.ts
- Add mobile-specific features or remove desktop-only features
- Update meta tags and PWA configuration for mobile

## Next Steps

After creating the dcfmob repository:
1. Update all configuration files as listed above
2. Test the application locally with `npm install && npm run dev`
3. Deploy to your hosting platform
4. Update DNS and environment variables as needed

## Support

If you need help with this process:
- Contact your development team
- Refer to GitHub documentation on repository management
- Check Next.js documentation for deployment options
