import "./sass/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index/Index.js";
import Projects from "./components/Projects/Projects.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Index />}></Route>
          <Route path="/projects" exact element={<Projects />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
