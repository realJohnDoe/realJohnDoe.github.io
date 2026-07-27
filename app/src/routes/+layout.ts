// The whole site is static, so every route — the vCard page and the blog — is
// prerendered at build time and served as plain files from GitHub Pages.
export const prerender = true;

// Emit blog/index.html rather than blog.html. Directory indexes are resolved the
// same way by every static host, so the sub-pages do not depend on GitHub Pages'
// extensionless-URL handling.
export const trailingSlash = 'always';
