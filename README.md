# ⚔️ Quest for the Code — Veeranna Joni's Portfolio

> A retro RPG-style interactive portfolio website built with pure HTML, CSS & JavaScript.
> No frameworks. No build tools. Just open `index.html` and play.

---

## 📁 Project Structure

```
📂 portfolio/
 ├── index.html             →  HTML structure         (don't edit)
 ├── styles.css             →  All styling & animations (don't edit)
 ├── main.js                →  Game logic & live APIs  (don't edit)
 ├── portfolio-config.js    →  ✏️  YOUR DATA FILE — only edit this
 ├── README.md              →  This file
 └── images/
     ├── favicon.ico
     ├── favicon-192.png
     └── apple-touch-icon.png
```

> ⚠️ **All 4 files and one folder(images) must stay in the same folder** for the site to work correctly.

---

## 🚀 How to Run Locally

1. Download all 4 files and 1 folder(images) into one folder
2. Open `index.html` in any modern browser
3. That's it — no installs, no npm, no build step needed

```bash
# Optional: serve with Python to avoid any CORS issues
python -m http.server 8080
# Then open → http://localhost:8080
```

---

## ✏️ How to Update Your Details

**You only ever need to edit one file: `portfolio-config.js`**
Everything else — the game, the layout, the API calls — updates automatically.

---

### 👤 Profile Info
```js
profile: {
  name:    "Your Name",
  title:   "Job Title",
  company: "Confidential.",
  bio:     "Your updated bio here...",
  status:  "Open to Opportunities",   // shown as live status in Contact zone
  level:   "LVL 8 ENGINEER",          // shown in HUD top bar
}
```

---

### 📡 Social Links
```js
contact: {
  github:   "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-handle",
  medium:   "https://medium.com/@your-handle",
  twitter:  "https://x.com/your-handle",
  twitch:   "",           // leave blank "" to hide
  website:  "",           // leave blank "" to hide
}
```

---

### 📬 Contact Form (Formspree)

The "Leave a Message" form is powered by **Formspree** and delivers messages directly to your email inbox.

**Current endpoint:**
```js
contact: {
  formspreeUrl: "https://formspree.io/f/mjgeoqor",
}
```

**To update the form endpoint in the future:**
1. Log in to [formspree.io](https://formspree.io)
2. Go to your form → copy the new endpoint URL
3. Open `portfolio-config.js`
4. Replace the value of `formspreeUrl` with your new URL

```js
// Example — just change this one line:
formspreeUrl: "https://formspree.io/f/YOUR_NEW_ID",
```

**How it works:**
- Visitor fills in Name + Email + Message → clicks Send
- Form validates all fields + email format in browser
- Sends a `POST` request to your Formspree endpoint
- Message lands in your **Gmail inbox** (`youremail@gmail.com`)
- Visitor sees a success/failure dialog instantly — no page reload

**Formspree free plan:** 50 messages/month — perfect for a portfolio.
Upgrade at [formspree.io/pricing](https://formspree.io/pricing) if needed.

---

### ⚡ Skills
```js
skills: [
  { name: "React",  pct: 70 },   // ← add a new skill here
  { name: "Java",   pct: 93 },
  // pct = proficiency percentage (0–100)
]
```

---

### 💼 Work Experience
```js
experience: [
  {
    icon:    "⚔️",
    title:   "Staff Engineer",
    company: "New Company",
    date:    "2025 — Present",
    desc:    "What you do there..."
  },
  // ... existing jobs below
]
```

---

### 🏗 Projects
```js
projects: [
  {
    name: "🚀 My New Project",
    desc: "What it does...",
    tags: ["Java", "Spring Boot", "Docker"],
    link: "https://github.com/your-username/project"  // "" to hide the link
  },
]
```

---

### 🏆 Achievements
```js
achievements: [
  { icon: "🥇", name: "NEW BADGE", desc: "What you achieved" },
]
```

---

### 📝 Medium Follower Count
Medium has no public API for follower counts, so update this manually:
```js
profile: {
  mediumFollowers: "500+",  // ← update whenever you check
}
```

---

## ⚡ Live Data (Auto-Updates Every Visit)

These numbers are fetched **live every time someone opens your portfolio** — you never need to update them manually:

| Data | Source | Where it appears |
|---|---|---|
| GitHub repo count | `api.github.com` | Character, Projects, Achievements, Contact |
| GitHub followers | `api.github.com` | Character, Achievements, Contact |
| GitHub repo list | `api.github.com` | Projects zone (live repo cards) |
| Medium blog posts | Medium RSS via `rss2json.com` | Scroll Library zone |
| Blog post count | Medium RSS | World map card + Scroll Library |

**If GitHub or Medium is slow to load**, the zones show a `⏳` spinner and auto-update as soon as data arrives — no page refresh needed.

---

## 🎮 Game Features

| Feature | Description |
|---|---|
| 🎮 Title Screen | Animated intro with glitch effect & PRESS START |
| 🗺️ World Map | 8 clickable zones to explore |
| ⚡ XP System | Gain XP every time you enter a zone |
| ◀ ▶ Navigation | Prev / Next buttons to move between zones |
| 📱 Responsive | Works on mobile, tablet & desktop |
| 🌟 Bottom Nav | Always-visible nav bar for quick zone switching |
| 💬 Dialog Box | RPG-style popup messages |
| ✨ Starfield | Animated star canvas background |
| 📡 Live APIs | Real-time GitHub & Medium data |
| 📬 Working Form | Formspree-powered contact form → your inbox |

---

### 🗺️ Zone Guide

| Zone | Contents |
|---|---|
| 👤 Character | Profile, bio, live GitHub stats |
| ⚡ Skills Forge | Animated skill bars + tech tag pills |
| 💼 Battle Log | Work experience timeline |
| 🏗 Artifact Hall | Your projects + live GitHub repos |
| ✍️ Scroll Library | Live Medium blog posts (RSS) |
| 🎓 Academy | Education + specialization badges |
| 🏆 Trophy Vault | Achievement badges + live hero stats |
| 📡 Signal Tower | All social links + working contact form |

---

## 🌐 Deploy for Free (Go Live in Minutes)

### ✅ Option 1 — GitHub Pages (Recommended)
1. Create a GitHub repo (e.g. `my-portfolio`)
2. Upload all 4 files
3. **Settings → Pages → Source → main branch → Save**
4. Live at: `https://your-username.github.io/my-portfolio`

> ⚠️ **Important for Formspree on GitHub Pages:**
> Go to [formspree.io](https://formspree.io) → your form → Settings → **Allowed Domains**
> Add your GitHub Pages URL so the form only accepts submissions from your site.

### ✅ Option 2 — Netlify (Drag & Drop, 30 seconds)
1. Go to [netlify.com](https://netlify.com) → sign up free
2. Drag your portfolio folder onto the dashboard
3. Instant live URL: `https://your-project.netlify.app`

### ✅ Option 3 — Vercel
1. Go to [vercel.com](https://vercel.com) → sign up free
2. Import your GitHub repo or drag & drop
3. Live in seconds with a custom URL

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling, animations, grid layout, responsive |
| Vanilla JavaScript ES6+ | Game logic, DOM rendering, API calls |
| GitHub REST API | Live repos, followers, repo list |
| rss2json.com | Medium RSS → JSON conversion |
| Formspree | Contact form → email delivery |
| Google Fonts | Press Start 2P · VT323 · Orbitron |
| Canvas API | Animated starfield background |

---

## 📞 Contact

**Veeranna Joni**

| | |
|---|---|
| 💼 LinkedIn | [linkedin.com/in/veeranna-joni-a6a89b20b](https://www.linkedin.com/in/veeranna-joni-a6a89b20b/) |
| 🐙 GitHub | [github.com/veerannajoni](https://github.com/veerannajoni) |

---

## 📄 License

© 2026 Veeranna Joni. All rights reserved.
