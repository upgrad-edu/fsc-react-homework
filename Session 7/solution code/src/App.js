import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
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
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/product/123">Product 123</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/home" default>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function Products() {
  return <h2>Product Listing Page</h2>;
}

function Product() {
  const { id } = useParams();
  return <h2>Product Page: {id}</h2>;
}

function About() {
  return <h2>About Page</h2>;
}