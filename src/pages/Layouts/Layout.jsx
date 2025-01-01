import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/uiSlice";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();

  return (
    <>
      {/* 헤더 영역 */}
      <header
        className="bg-black border-b-4 border-green-700
      "
      >
        <nav className="container mx-auto px-4 py-4 flex flex-row items-center justify-between text-green-400 font-mono">
          {/* 사이드바 토글 버튼 */}
          <div className="flex-1 text-left">
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="text-green-600 text-4xl rounded-sm focus:outline-none transition hover:scale-110"
            >
              <i className="bi bi-list"></i>
            </button>
          </div>

          {/* 사이트 이름 */}
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold tracking-widest ml-4">
              <Link to="/">AWESOME BLOG</Link>
            </h1>
          </div>

          {/* 네비게이션 메뉴 */}
          <div className="flex-1">
            <ul className="flex justify-end gap-6 text-green-400">
              <li className="cursor-pointer hover:text-green-600 transition-colors">
                HOME
              </li>
              <li className="cursor-pointer hover:text-green-600 transition-colors">
                ABOUT
              </li>
              <li className="cursor-pointer hover:text-green-600 transition-colors">
                CONTACT
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

function Footer() {
  return (
    <>
      {/* 푸터 영역 */}
      <footer className="bg-black border-t-4 border-green-700 mt-auto">
        <div className="container mx-auto px-4 py-4 text-center text-green-400 font-mono text-sm">
          &copy; {new Date().getFullYear()} AWESOME BLOG. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </>
  );
}

export { Header, Footer };
