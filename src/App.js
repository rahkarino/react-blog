import React from "react";
import Blog from "./containers/Blog/Blog";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Blog />
      </div>
    </Router>
  );
}

export default App;
