import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Magazines from "./pages/Magazines";
import Ebooks from "./pages/Ebooks";
import Header from "./components/Header";
import MobileSocial from "./components/MobileSocial";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/magazines" element={<Magazines />} />
          <Route path="/ebooks" element={<Ebooks />} />
        </Routes>
        <MobileSocial />
      </Router>
    </div>
  );
}

export default App;
