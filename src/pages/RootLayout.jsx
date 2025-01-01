import { Outlet } from "react-router-dom";

import { Header, Footer } from './Layouts/Layout.jsx';
import Sidebar from './Layouts/Sidebar.jsx';

function RootLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
