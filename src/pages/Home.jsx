function Home() {
  return (
    <>
      {/* 메인 콘텐츠 영역 */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero 섹션 */}
        <section className="mb-12 bg-white shadow-md rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Welcome to My Blog
          </h2>
          <p className="text-gray-600">
            멋진 아이디어와 유익한 정보를 공유하는 공간입니다.
          </p>
        </section>

        {/* 게시글 목록 섹션 */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 게시글 카드 예시 1 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1561489424-016c30f90256"
              alt="blog-post-1"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Blog Post Title 1
              </h3>
              <p className="text-gray-600 mb-4">
                이곳에 포스트에 대한 간략한 설명을 작성해줘. React와 Tailwind
                CSS로 더욱 깔끔하고 빠르게 작업할 수 있어.
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Read More
              </button>
            </div>
          </article>

          {/* 게시글 카드 예시 2 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1533107862482-0e6970d85f69"
              alt="blog-post-2"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Blog Post Title 2
              </h3>
              <p className="text-gray-600 mb-4">
                이곳에 포스트에 대한 간략한 설명을 작성해줘. 반응형 웹으로
                제작되어 어떤 기기에서도 편리하게 볼 수 있어.
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Read More
              </button>
            </div>
          </article>

          {/* 게시글 카드 예시 3 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1604147706284-8f1f3ac1a6fd"
              alt="blog-post-3"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Blog Post Title 3
              </h3>
              <p className="text-gray-600 mb-4">
                Tailwind CSS를 활용하면, 디자인 시스템을 빠르게 구축할 수 있다는
                점이 큰 장점이야.
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Read More
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Home