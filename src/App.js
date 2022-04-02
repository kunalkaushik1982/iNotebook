import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteSate from "./context/notes/NoteState";
import { Alert } from "./components/Alert";

function App() {
  return (
    <>
    <NoteSate>
        <Router>
          <Navbar />
          <Alert message="This is amazing"/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/about" element={<About/>}></Route>
            </Routes>
          </div>
        </Router>
      </NoteSate>
    </>
  );
}

export default App;
