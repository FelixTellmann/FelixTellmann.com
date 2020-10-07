const fs = require('fs');

const globby = require('globby');

(async () => {
  const pages = await globby([
    'pages/**/*{.js,.jsx,.mdx,.ts,.tsx}',
    '!pages/_*{.js,.jsx,.mdx,.ts,.tsx}',
    '!pages/**/[*{.js,.jsx,.mdx,.ts,.tsx}',
    '!pages/api'
  ]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages
    .map((page) => {
      const path = page.replace(/((^pages)|(\/index)|(\.(js|jsx|ts|tsx|mdx)$))/gi, '').replace('/index', '');
      return `\n  <url>
    <loc>${`https://felixtellmann.com${path}`}</loc>
  </url>  `;
    })
    .join('')}\n</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
})();
