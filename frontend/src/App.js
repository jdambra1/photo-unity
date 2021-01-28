import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Competitions from "./components/Competitions";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/competitions" component={Competitions} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

// https://www.digitalocean.com/community/tutorials/how-to-share-state-across-react-components-with-context
