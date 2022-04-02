import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteSate from "./context/notes/NoteState";

function App() {
  return (
    <>
    <NoteSate>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
          </Routes>
        </Router>
      </NoteSate>
    </>
  );
}

export default App;
