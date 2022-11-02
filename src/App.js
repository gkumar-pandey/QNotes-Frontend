import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/note" element={<HomePage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
