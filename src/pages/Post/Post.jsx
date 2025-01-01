import "../../styles/markdown.css";
import "highlight.js/styles/atom-one-dark.css"

import axios from "axios";
// Markdown Imports ----------------------------------*/
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItTocDoneRight from "markdown-it-toc-done-right";
import markdownItHighlightJS from "markdown-it-highlightjs";
import hljs from "highlight.js";
import matter from "gray-matter";
import uslug from "uslug";
/*----------------------------------------------------*/
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const [content, setContent] = useState("");
  const [toc, setToc] = useState("");
  const [frontMatter, setFrontMatter] = useState({});
  const params = useParams()

  useEffect(() => {
    // 마크다운 파일 읽어오기
    const fetchMarkdown = async () => {
      try {
        console.log(import.meta.env.MODE);
        let mdPath = "";
        if (import.meta.env.MODE == "development") {
          mdPath = `/posts/${params.slug}/`;
        } else if (import.meta.env.MODE == "production") {
          mdPath =
            `https://raw.githubusercontent.com/wxnovic/wxnovic.github.io/refs/heads/gh-pages/posts/${params.slug}/`;
        }

        const response = await axios.get(`${mdPath}${params.slug}.md`);
        const { data } = response;
        const { content, data: frontMatter } = await matter(data);

        setContent(md.render(content));
        setFrontMatter(frontMatter);
      } catch (error) {
        console.error("Error fetching markdown:", error);
      }
    };

    fetchMarkdown();
  }, []);

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
        setToc(toc);
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
      <main className="flex-grow container w-11/12 mx-auto px-4 py-8 font-mono text-green-400 bg-black">
        {/* Hero 섹션 */}
        <section className="mb-12 bg-black border-4 border-green-700 rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold tracking-widest mb-4">
            {frontMatter.title}
          </h2>
          <p className="text-xl">{frontMatter.description}</p>
        </section>
        <div className="flex">
          <div
            className="markdown-body w-10/12 border-4 border-green-700 rounded-lg p-4"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <div className="" dangerouslySetInnerHTML={{ __html: toc }}></div>
        </div>
      </main>
    </>
  );
}

export default Post;
