import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Ruta para la página principal */}
            <Route path="/" element={<HomePage />} />

            {/* Puedes agregar más rutas aquí */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;


