// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    // <Header></Header>
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </HashRouter>
    // <Footer></Footer>
  );
}

export default App;