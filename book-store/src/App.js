import React from "react";
import Header from "./componets/Header";
import Home from "./componets/Home";
import AddBook from "./componets/AddBook";
import About from "./componets/About";
import Books from "./componets/Book/Books";
import Bookdetails from "./componets/Book/Bookdetails";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      {/* Header component containing navigation links */}
      <header>
        <Header />
      </header>
      {/* Main content area with React Router routes */}
      <main>
        {/* Routes component to define navigation routes */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Route for adding a new book */}
          <Route path="/add" element={<AddBook />} />
          {/* Route for displaying all books */}
          <Route path="/items" element={<Books />} />
          {/* Route for the about page */}
          <Route path="/about" element={<About />} />
          {/* Route for displaying details of a specific book */}
          <Route path="/items/:id" element={<Bookdetails />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
