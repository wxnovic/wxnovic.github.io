import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '/src/App'; // React 애플리케이션의 진입점
import { Helmet } from 'react-helmet';

export async function render(url, manifest) {
  const context = {};

  // 서버에서 React 애플리케이션 렌더링
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  );

  // React Helmet을 사용해 메타데이터 수집
  const helmet = Helmet.renderStatic();

  // Preload 링크 생성
  const preloadLinks = renderPreloadLinks(context.modules, manifest);

  return {
    appHtml,
    preloadLinks,
    htmlAttrs: helmet.htmlAttributes.toString(),
    bodyAttrs: helmet.bodyAttributes.toString(),
    headTags: `
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
        `,
    bodyTags: '',
    bodyTagsOpen: '',
  };
}

function renderPreloadLinks(modules, manifest) {
  let links = '';
  const seen = new Set();

  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          const filename = file;
          if (filename.endsWith('.js')) {
            links += `<link rel="modulepreload" href="${filename}">`;
          } else if (filename.endsWith('.css')) {
            links += `<link rel="stylesheet" href="${filename}">`;
          }
        }
      });
    }
  });

  return links;
}
