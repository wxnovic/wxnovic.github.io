// App.jsx

import "./App.css";
import { Header, Footer } from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
