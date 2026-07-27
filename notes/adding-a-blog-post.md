# Adding a blog post

Posts are Markdown files in `app/src/posts/`, compiled to Svelte components by
[mdsvex](https://mdsvex.pngwn.io/). Everything else — the "Writing" card at the bottom of
the homepage, reading time, and the teaser text — is derived from the file, so adding a
post means adding one file.

There is no separate blog index page: the "Writing" card lists every post, and each post
gets its own page.

## 1. Create the file

The **file name becomes the URL**: `app/src/posts/my-post.md` is served at `/blog/my-post`.
Use lowercase words separated by hyphens.

Start it with YAML frontmatter:

```yaml
---
title: 'Meridian: Why I built a Markdown-first calendar'
tags: [product, philosophy, architecture, features]
date: 2026-07-23
description: Optional. Shown on the listing and as the page's meta description.
---
```

| Field         | Required | Notes                                                              |
| ------------- | -------- | ------------------------------------------------------------------ |
| `title`       | yes      | Rendered as the page's `<h1>`                                       |
| `date`        | yes      | `YYYY-MM-DD`; posts are listed newest first                         |
| `tags`        | no       | Rendered as badges                                                  |
| `description` | no       | Defaults to the first paragraph of the post, trimmed to ~220 chars  |

Then write the body **without a top-level `# Heading`** — the page renders `title` as the
only `<h1>`, and a second one would be a duplicate.

## 2. Add images

Put image files in `app/static/blog/images/` and reference them with an absolute path
starting at `/blog/images/`. They are copied to the site as-is, so the name you use is the
name that ships.

Wrap each one in a `figure` so it picks up the site's caption and sizing styles:

```html
<figure class="post-figure post-figure--phone">
  <img
    src="/blog/images/agenda-view.png"
    width="732"
    height="1411"
    loading="lazy"
    alt="Meridian's agenda view on a phone, showing tasks and events grouped by day."
  />
  <figcaption>The agenda view: scheduled tasks and events on a single timeline.</figcaption>
</figure>
```

- `post-figure--phone` caps the image at 340 px — for portrait phone screenshots.
- `post-figure--wide` lets it fill the text column — for landscape desktop screenshots.
- `width` and `height` must be the image's **real pixel dimensions**. They are not the
  display size (CSS controls that); they let the browser reserve the right amount of space
  so the text does not jump while the image loads.
- `loading="lazy"` on everything except the first image.
- `alt` is not optional — it is what a screen reader and a failed image both fall back to.

To change how images are sized site-wide, edit the `.post-figure` rules in
`app/src/app.css` rather than the individual files.

## 3. Check it

```bash
npm run dev --prefix app
```

The post appears at `/blog/<file-name>/` and in the "Writing" card at the bottom of the
homepage.

## Things worth knowing

- **Curly braces are Svelte syntax.** mdsvex compiles posts as Svelte components, so a bare
  `{` in the prose is read as the start of an expression. Wrap it in backticks or escape it
  as `&#123;`.
- **Raw HTML is passed straight through**, which is why the `figure` blocks above work.
- **Prettier ignores `app/src/posts`** (see `app/.prettierignore`) so it will not rewrap
  hand-wrapped prose.
- **Image paths assume the site is served from the domain root**, which it is today
  (`realjohndoe.github.io`). If the site ever moves under a sub-path, `/blog/images/...`
  would need SvelteKit's `base` prefix.
