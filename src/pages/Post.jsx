import "../styles/markdown.css";

// Markdown Imports ----------------------------------*/
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItTocDoneRight from "markdown-it-toc-done-right";
import markdownItHighlightJS from "markdown-it-highlightjs";
import hljs from "highlight.js";
import matter from "gray-matter";
import uslug from "uslug";
/*----------------------------------------------------*/
import { useState } from "react";

function Post() {

  console.log("TEST");
  const md = markdownIt({
    html: true,
  })
    .use(markdownItAnchor, {
      slugify: (s) => {
        return uslug(s);
      },
    })
    .use(markdownItTocDoneRight, {
      containerClass: "toc", // TOC 컨테이너 클래스 설정
      slugify: (s) => {
        return uslug(s);
      },
      callback: (html, ast) => {
        let toc = generateToc(ast);
        toc = `<nav>${toc}</nav>`;
        this.toc = toc;
      },
    })
    .use(markdownItHighlightJS, {
      hljs: hljs,
    });

  function generateToc(node) {
    let html = "";
    // 현재 노드의 이름이 있는 경우 li 요소로 감싸기
    if (node.n) {
      let padding = "ps-3";
      if (node.l === 1) {
        padding = "";
      }
      html += `<li class="text-sm text-slate-300 ${padding}"><a href="#${uslug(
        node.n
      )}">${node.n}`;
    }

    // "c" 키가 배열이고, 배열에 요소가 있는 경우 ul로 감싸고 재귀 호출
    if (Array.isArray(node.c) && node.c.length > 0) {
      html += "<ul>";
      node.c.forEach((childNode) => {
        html += generateToc(childNode); // 하위 노드를 재귀적으로 처리
      });
      html += "</ul>";
    }

    // 현재 노드가 li로 시작했다면 li를 닫기
    if (node.n) {
      html += "</a></li>";
    }
    return html;
  }

  return (
    <>
      {/* 메인 콘텐츠 영역 */}
      <main className="flex-grow container mx-auto px-4 py-8 font-mono text-green-400 bg-black">
        {/* Hero 섹션 */}
        <section className="mb-12 bg-black border-4 border-green-700 rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold tracking-widest mb-4">
            WELCOME TO MY BLOG
          </h2>
          <p className="text-lg">
            멋진 아이디어와 유익한 정보를 공유하는 공간입니다.
          </p>
        </section>
        <div className="markdown-body"></div>
      </main>
    </>
  );
}

export default Post;
