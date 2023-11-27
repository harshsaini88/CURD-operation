import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [value, setValue] = useState('addProduct'); // Use consistent single quotes

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white", textDecoration: 'none' }}>
            <Typography variant="h6">
              <BookIcon style={{ marginRight: '5px' }} /> BookStore
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: 'auto' }}
            textColor="inherit" indicatorColor="primary" value={value} onChange={handleChange}
          >
            {/* Use 'component' prop directly */}
            <Tab component={NavLink} to='/add' label="Add Product" value="addProduct" />
            <Tab component={NavLink} to='/items' label="Books" value="book" />
            <Tab component={NavLink} to='/about' label="About Us" value="aboutUs" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
