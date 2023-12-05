import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Authors from "../pages/Authors";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import AuthorDetail from "../pages/AuthorDetails";
import Login from "../pages/Login";
import Nav from "../components/Nav";
import NotFound from "../components/NotFound";
import ProtectedRoute from "../Navigation/ProtectedRoute";

function App() {
  return (
    <Fragment>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/books" Component={Books} />
          <Route path="/book/:id" Component={BookDetails} />
          <Route path="/authors" Component={Authors} />
          <Route path="/author/:name" Component={AuthorDetail} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
