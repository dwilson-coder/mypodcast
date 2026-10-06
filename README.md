# MyPodcast

![MyPodcast Preview](https://raw.githubusercontent.com/dwilson-coder/mypodcast/refs/heads/main/assets/og.jpg)

A professional podcast website built with vanilla HTML, CSS, and JavaScript. Inspired by the [WpCasterPro](https://wpcasterpro.qantumthemes.xyz/demo2/) podcast theme design.

## Features

- 🎙️ **Podcast-focused layout** — hero section, episode grid, series cards, about section
- 🎵 **Non-stop audio player bar** — fixed bottom player with play/pause, progress, and volume
- 🌑 **Dark theme** — modern dark UI with purple accent colors
- 📱 **Fully responsive** — mobile-first with breakpoints at 480px, 768px, and 1024px
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard navigable
- 🚀 **Zero dependencies** — no frameworks, no build step
- 🔍 **SEO optimized** — OpenGraph, Twitter Cards, canonical, and social meta tags
- 🎨 **SVG logo & favicons** — scalable vector assets in 16x16, 32x32, and 48x48

## Project Structure
```
mypodcast/
├── index.html # Main HTML file
├── README.md # This file
├── css/
│ └── style.css # All styles (CSS custom properties, responsive)
├── js/
│ └── main.js # Interactive features (player, nav, animations)
└── assets/
├── logo.svg # Main logo (64x64)
├── favicon-16x16.svg
├── favicon-32x32.svg
└── favicon-48x48.svg
```   


## Getting Started

No build tools required. Simply open `index.html` in a browser, or serve it locally:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000   
Then visit http://localhost:8000.

### Social Media Links


| Platform | URL |
|----------|-----|
| Instagram | https://www.instagram.com/mypodcast |
| YouTube | https://www.youtube.com/@mypodcast |
| TikTok | https://www.tiktok.com/@mypodcast |
| LinkedIn | https://www.linkedin.com/company/mypodcast |

SEO / OpenGraph
The HTML includes:

* og:type, og:url, og:title, og:description, og:image
* Twitter Card meta tags (summary_large_image)
* Social platform links via social:instagram, social:youtube, social:tiktok, social:linkedin
* Canonical URL
* Meta description, keywords, robots

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0f0f1a` | Body background |
| `--color-bg-secondary` | `#16162b` | Alternate sections |
| `--color-card` | `#1c1c35` | Cards, player bar |
| `--color-accent` | `#7c3aed` | Buttons, links, highlights |
| `--color-accent-hover` | `#9333ea` | Hover states |
| `--color-text` | `#f1f1f6` | Primary text |
| `--color-text-secondary` | `#a0a0b8` | Secondary text |
| `--color-border` | `#2a2a4a` | Borders, separators |

### Browser Support
* Chrome 80+
* Firefox 75+
* Safari 13+
* Edge 80+

## License

**All Rights Reserved.**

This project is proprietary. You may not copy, reproduce, distribute, modify, or create derivative works of this code without explicit written permission from the author.
---

