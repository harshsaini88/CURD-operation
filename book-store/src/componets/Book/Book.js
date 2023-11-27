import { Button } from '@mui/material';
import React from 'react';
import "./book.css";
import { Link} from 'react-router-dom';

const Book = (props) => {
  const Ondelete =()=>{
    props.deleteHandler(_id)
  }
  const { _id, name, author, description, price, image } = props.book ?? {};

  if (!_id) {
    // Handle the case when props.book is undefined or doesn't have _id
    return null; // or some default content or error message
  }

  return (
    <div className='card'>
      <img src={image} alt={name}/>
      <br/>
      <article>By {author} </article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button component={Link} to={`/items/${_id}`} sx={{ mt: "auto" }}>Update</Button>
      <Button onClick={Ondelete} sx={{ mt: "auto" }}>Delete</Button>
    </div>
  );
};

export default Book;
