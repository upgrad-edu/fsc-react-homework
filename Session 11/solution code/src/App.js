import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/home" default>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// The custom hook
const useLoad = (name) => {
  useEffect(() => {
    console.log(`Page ${name} loaded at ${new Date()}`);
  });
};

function Home() {
  useLoad("home");
  return <h2>Home Page</h2>;
}

function ContactUs() {
  useLoad("contact");
  return <h2>Contact Us Page</h2>;
}

function About() {
  useLoad("about");
  return <h2>About Page</h2>;
}
