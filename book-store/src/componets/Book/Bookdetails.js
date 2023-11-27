import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  FormLabel,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const Bookdetails = () => {
  const [inputs, setInputs] = useState({
  });
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();

  // console.log(id);

  useEffect(() => {
    const fetchHandler = async () => {
    await axios.get(`http://localhost:5000/items/${id}`)
      .then((res) => res.data)
      .then(data => setInputs(data));
    };
    fetchHandler();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Use a spread operator to copy the existing state
    setInputs(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const sendRequest = async() =>{
    await axios.put(`http://localhost:5000/items/${id}`,{
      name : String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked),
      

    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=> history("/items"))
    // Add your logic to submit the form data
  };
  // console.log(inputs);

  return (
    <div>
      {inputs && (
      <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf={"center"}
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={10}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name || ""}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Author Name</FormLabel>
            <TextField
              value={inputs.author || ""}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
            />
            <FormLabel>Description</FormLabel>
            <TextField
              value={inputs.description || ""}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <FormLabel>Price</FormLabel>
            <TextField
              value={inputs.price || ""}
              type="number"
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />
            <FormLabel>Image</FormLabel>
            <TextField
              value={inputs.image || ""}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
              label="Available"
            />
            <Button variant="contained" type="submit">
              Update Book
            </Button>
          </Box>
        </form>
      )}  
    </div>
  );
};

export default Bookdetails;
