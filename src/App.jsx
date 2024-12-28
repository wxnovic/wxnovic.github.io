// App.jsx

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Header, Footer } from "./components/Layout.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <BrowserRouter>
        <Header />
        <Sidebar sidebarVisible={true}></Sidebar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
