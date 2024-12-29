---
title: "#1 Vue3 + TailwindCSS + Github Pages로 블로그 제작하기"
description: Vue3 프로젝트 구성
tags: [Vue3, TailwindCSS, Github Pages, 블로그, 웹 개발]
author: emdas93
category: Vue3
permalink: /post/2024-08-17-how-to-create-git-blog-1
slug: 2024-08-17-how-to-create-git-blog-1
image: '/posts/assets/2024-08-17-how-to-create-git-blog-1/title.png'
published: true
created_at: 2024-08-17 12:45:00
updated_at: 2024-08-17 12:45:00
---

## 1. Vite Vue 설정

첫 번째로 빌드 도구 설치와 Vue3 설치가 필요합니다.

저는 빌드 도구로 Vite를 사용할 예정입니다.

아래 명령어를 통해 Vite 프로젝트를 생성해줍니다.

``` bash
npm create vite@latest my-blog
```

프레임워크와 언어를 아래 이미지와 같이 선택합니다.

![Image1](/src/assets/images/posts/how-to-create-git-blog-1/how-to-create-git-blog-image-1.png)

![Image2](/src/assets/images/posts/how-to-create-git-blog-1/how-to-create-git-blog-image-2.png)

![Image3](/src/assets/images/posts/how-to-create-git-blog-1/how-to-create-git-blog-image-3.png)

선택이 끝나셨다면 3번째 이미지와 같이 생성된 폴더로 이동하여 `npm install` 을 실행하고 `npm run dev` 명령어롤 차례대로 실행해줍니다.

NPM 라이브러리들을 설치하고 서버 실행 명령어를 입력하여

아래와 같은 화면이 나온다면 성공입니다.

![Image4](/src/assets/images/posts/how-to-create-git-blog-1/how-to-create-git-blog-image-4.png)

![Image5](/src/assets/images/posts/how-to-create-git-blog-1/how-to-create-git-blog-image-5.png)

## 2. TailwindCSS 설치

TailwindCSS 설치를 위해 아래 명령어를 실행합니다.

``` bash
npm install -D tailwindcss
npx tailwindcss init
```

명령어를 차례대로 실행하였다면 `tailwind.config.js` 파일이 생성됩니다.

tailwind.config.js 파일을 아래와 같이 수정합니다.

``` javaScript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```










출처 : [https://ko.vitejs.dev/guide/](https://ko.vitejs.dev/guide/) <br>
출처 : [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)