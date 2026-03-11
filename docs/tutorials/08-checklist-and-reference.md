# Tutorial 8: Checklist and Quick Reference

## Summary checklist

- [ ] Firebase project created in the console
- [ ] Firebase CLI installed (`npm install -g firebase-tools`)
- [ ] Logged in (`firebase login`)
- [ ] In app folder, ran `firebase init hosting`
- [ ] Chose existing project, `dist` as public directory, SPA = Yes
- [ ] Optionally set up GitHub: repo name, build script `npm ci && npm run build`, deploy on merge
- [ ] GitHub secret for Firebase service account added if the workflow needs it
- [ ] Pushed to `main` and checked Actions; site live at `*.web.app`

## Quick reference

| Goal | Command or action |
|------|--------------------|
| Log in to Firebase | `firebase login` |
| See current project | `firebase use` |
| Switch project | `firebase use <project-id>` |
| Init Hosting only | `firebase init hosting` |
| Build app | `npm run build` |
| Deploy manually | `firebase deploy` |
| Deploy automatically | Push (or merge) to `main` |

**Next:** [Tutorial 9: Troubleshooting](09-troubleshooting.md)
