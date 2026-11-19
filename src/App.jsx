
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Central from "./pages/Central";
import Login from "./pages/Login";

import "./styles/global.css";
import "./styles/home.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main id="conteudo-principal">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/central"
            element={
              <ProtectedRoute>
                <Central />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
