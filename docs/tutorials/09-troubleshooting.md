# Tutorial 9: Troubleshooting

## “Must be run from a Firebase project directory”

**Cause:** No `firebase.json` / `.firebaserc` in the current folder.

**Fix:** Run `firebase init hosting` (or `firebase init`) in your app folder first.

---

## Node version error with Firebase CLI

**Cause:** Firebase CLI needs Node 20+ (or 22+).

**Fix:** Upgrade Node. Example with nvm: `nvm install 22 && nvm use 22`.

---

## Workflow fails with “Permission denied” or auth error

**Cause:** GitHub Actions doesn’t have a valid Firebase token.

**Fix:** Add the Firebase service account secret to the repo (see [Tutorial 6: GitHub Secrets](06-github-secrets.md)). Ensure the secret name in GitHub matches the name used in the workflow file.

---

## 404 on refresh or direct URL

**Cause:** Hosting doesn’t know to serve `index.html` for all routes (SPA).

**Fix:** Re-run `firebase init hosting` and choose “Single-page app? **Yes**”, or add the `rewrites` block in `firebase.json` so all routes go to `index.html`.

---

## Wrong content or old version live

**Cause:** For automatic deploys, the workflow builds from the code on GitHub.

**Fix:** Push your latest code. Confirm your build step (e.g. `npm run build`) writes to the folder you set as “public directory” in Hosting (e.g. `dist`).

---

You now have the full path: **Firebase project → Hosting → GitHub → workflow → deploy**. In other words: business → storefront → workshop → delivery truck → open for business.

**[Back to tutorials index](README.md)**
