# Development


## Roadmap

- [ ] Add tests
- [ ] Refactor JS to be DRY and OO
- [ ] Make into multi-page JS app - possibly with Vue, React or Preact, or Jekyll and mustache
- [ ] Split view into left and right (or top and bottom) optionally mobile friendly


## Run locally

Start a server. Preferably one with hot-reloading.

Open the `/badge_generator.html` page on localhost.


### Notes

- The markdown files get styling added on GitHub and are kept light here without Jekyll theming for now.
- The badge generator HTML file has no frontmatter, so the brackets are not parsed at build time, leaving them to be processed by mustache.
- Dependencies are loaded in the HTML to keep the built process light for now.
-  We use the approach here to render markdown to HTML, but after Mustache is run. https://stackoverflow.com/questions/52562508/using-markdown-in-javascript-template-engine