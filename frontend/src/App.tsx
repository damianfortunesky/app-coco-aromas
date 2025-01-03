import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ProductList />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
