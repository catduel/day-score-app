# iOS Setup

This project is prepared for Capacitor iOS.

On a Mac with Xcode installed:

```bash
npm install
npm run cap:add:ios
npm run cap:sync:ios
npx cap open ios
```

The iOS web bundle is in `www/`. If you change `index.html`, `styles.css`, `app.js`, or `assets/`, run:

```bash
npm run build
npm run cap:sync:ios
```

Current app id:

```text
com.dayscore.app
```
