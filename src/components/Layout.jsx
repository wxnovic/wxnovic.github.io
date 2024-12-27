function Header() {
  return (
    <>
      {/* 헤더 영역 */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">My Awesome Blog</h1>
          <ul className="flex gap-6 text-gray-600">
            <li className="cursor-pointer hover:text-blue-600 transition-colors">
              Home
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors">
              About
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors">
              Contact
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

function Footer() {
  return (
    <>
      {/* 푸터 영역 */}
      <footer className="bg-white shadow-inner mt-auto">
        <div className="container mx-auto px-4 py-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} My Awesome Blog. All rights
          reserved.
        </div>
      </footer>
    </>
  );
}

export { Header, Footer };
