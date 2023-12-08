import React, { Fragment } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Nav from "components/Nav";
import NotFound from "components/NotFound";
import ProtectedRoute from "navigation/ProtectedRoute";
import Authentication from "pages/Authentication";
import AuthorDetails from "pages/AuthorDetails";
import Authors from "pages/Authors";
import BooksDetails from "pages/BookDetails";
import Books from "pages/Books";
import Cart from "pages/Cart";
import Home from "pages/Home";

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Authentication} />
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/books" Component={Books} />
          <Route path="/book/:id" Component={BooksDetails} />
          <Route path="/authors" Component={Authors} />
          <Route path="/author/:name" Component={AuthorDetails} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </HashRouter>
    </Fragment>
  );
}

export default App;
