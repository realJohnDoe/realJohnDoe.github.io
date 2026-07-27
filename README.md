# Johannes' Personal Website

Built on top of [codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio)

A SvelteKit app in [`app/`](app), prerendered to static files by `adapter-static` and
deployed to GitHub Pages by [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
on every push to `main`.

## Repository layout

| Path                  | What lives there                                              |
| --------------------- | ------------------------------------------------------------- |
| `app/src/routes`      | Pages — the vCard homepage and the individual post pages       |
| `app/src/lib`         | Shared components (header, nav, cards) and the post index      |
| `app/src/posts`       | Blog posts, one Markdown file per post                         |
| `app/static/blog`     | Images referenced by blog posts                                |
| `notes/`              | Working material that is not published (interview notes, …)    |

## Writing a blog post

See [Adding a blog post](notes/adding-a-blog-post.md).

## Developing

```bash
npm install --prefix app
```

```bash
npm run dev --prefix app
```
