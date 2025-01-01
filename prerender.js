import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const toAbsolute = (p) => path.resolve(__dirname, p);

const manifest = JSON.parse(
  fs.readFileSync(toAbsolute('dist/client/.vite/ssr-manifest.json'), 'utf-8')
);
const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');
const { render } = await import('./src/entry-server.js');

// Determine routes to pre-render from src/pages
const routesToPrerender = fs.readdirSync(toAbsolute('./posts')).map((file) => {
  const routeName = '/post/' + file.replace(/\.md$/, '');
  return routeName;
});

routesToPrerender.push('/wxhack');

// Exclude specific routes
for (let i = routesToPrerender.length - 1; i >= 0; i--) {
  if (routesToPrerender[i] === '/post/template' || routesToPrerender[i] === '/post/assets') {
    routesToPrerender.splice(i, 1);
  }
}

routesToPrerender.push('/');

const copyFolderSync = (source, destination) => {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  const items = fs.readdirSync(source);

  items.forEach((item) => {
    const sourcePath = path.join(source, item);
    const destinationPath = path.join(destination, item);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyFolderSync(sourcePath, destinationPath);
    } else {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  });
};

(async () => {
  for (const url of routesToPrerender) {
    const { appHtml, preloadLinks, headTags, htmlAttrs, bodyAttrs, bodyTags } = await render(url, manifest);
    const html = template
      .replace('<!--htmlAttrs-->', htmlAttrs)
      .replace('<!--headTags-->', headTags)
      .replace('<!--bodyAttrs-->', bodyAttrs)
      .replace('<!--bodyTags-->', bodyTags)
      .replace(`<!--preload-links-->`, preloadLinks)
      .replace(`<!--app-html-->`, appHtml);

    let index = 'index.html';
    if (url !== '/') {
      index = '/' + index;
    }

    const filePath = 'dist/static' + url + index;
    const fileDirName = path.dirname(filePath);

    if (!fs.existsSync(fileDirName)) {
      fs.mkdirSync(fileDirName, { recursive: true });
    }

    fs.writeFileSync(toAbsolute(filePath), html);
    console.log('pre-rendered:', filePath);
  }

  await copyFolderSync('dist/client/assets', 'dist/static/assets');
  await copyFolderSync('posts', 'dist/static/posts');
  await copyFolderSync('src/assets/', 'dist/static/assets');
})();
