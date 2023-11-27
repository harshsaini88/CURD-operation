import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book.js";
import "./book.css";

const URL = "http://localhost:5000/items";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deleteHandler =async (id) =>{
    await axios.delete(`http://localhost:5000/items/${id}`)
    const response = await axios.get(URL);
    setBooks(response.data);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setBooks(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul>
        {books.map((book, i) => (
          <li key={i}>
            <Book book={book} deleteHandler={deleteHandler} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
