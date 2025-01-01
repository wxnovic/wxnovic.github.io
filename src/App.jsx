// App.jsx
import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
