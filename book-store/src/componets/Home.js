import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* Button with Link to /items */}
        <Button
          component={Link}
          to="/items"
          sx={{ marginTop: 15, background: "orangered", '&:hover': { background: 'darkorange' } }}
          variant='contained'
        >
          <Typography variant='h3'>View All Products</Typography>
        </Button>
      </Box>
    </div>
  );
}

export default Home;
