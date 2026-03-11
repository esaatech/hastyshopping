# Tutorial 7: Deploy (Open the Store)

## Option A: Automatic (recommended)

1. Commit and push to `main`:
   ```bash
   git add .
   git commit -m "Setup Firebase Hosting and GitHub deploy"
   git push origin main
   ```

2. On GitHub, open **Actions**. You should see the “Deploy to Firebase Hosting on merge” workflow run, build, and deploy.

3. When it’s green, your site is live at:
   - `https://<project-id>.web.app`
   - `https://<project-id>.firebaseapp.com`

## Option B: Manual (no GitHub)

1. Build locally:
   ```bash
   npm run build
   ```

2. Deploy:
   ```bash
   firebase deploy
   ```

3. Same URLs as above.

**Next:** [Tutorial 8: Checklist and quick reference](08-checklist-and-reference.md)
