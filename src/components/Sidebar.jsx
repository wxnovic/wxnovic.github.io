import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/uiSlice";

function Sidebar() {
  const sidebarVisible = useSelector((state) => state.ui.sidebarVisible);

  const dispatch = useDispatch();

  return (
    <aside
      className={`fixed top-0 left-0 w-64 min-h-screen bg-black text-green-400 border-r-4 border-green-700 transition-transform transform z-10 ${
        sidebarVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full font-mono">
        {/* 헤더 */}
        <div className="flex items-center justify-center h-16 bg-green-700 text-black shadow-inner">
          <h1 className="text-lg font-bold tracking-widest">RETRO MENU</h1>
          <button onClick={() => dispatch(toggleSidebar())}>
            <i className="bi bi-x text-4xl"></i>
          </button>
        </div>

        {/* 메뉴 아이템 */}
        <nav className="flex-grow">
          <ul className="mt-4 mb-4 space-y-4 px-4">
            <li>
              <a
                href="#"
                className="block p-3 border-2 border-green-700 bg-black text-green-400 rounded hover:bg-green-700 hover:text-black transition-transform transform hover:scale-110"
              >
                <span className="pixel-font">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 border-2 border-green-700 bg-black text-green-400 rounded hover:bg-green-700 hover:text-black transition-transform transform hover:scale-110"
              >
                <span className="pixel-font">Posts</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 border-2 border-green-700 bg-black text-green-400 rounded hover:bg-green-700 hover:text-black transition-transform transform hover:scale-110"
              >
                <span className="pixel-font">Analytics</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 border-2 border-green-700 bg-black text-green-400 rounded hover:bg-green-700 hover:text-black transition-transform transform hover:scale-110"
              >
                <span className="pixel-font">Settings</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* 푸터 */}
        <div className="px-4 py-4 bg-green-700 text-black text-center">
          <p className="text-sm tracking-wide">© 2024 Retro Sidebar</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
