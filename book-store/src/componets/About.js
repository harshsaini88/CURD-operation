import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <div>
      {/* Using Box for layout with flex properties */}
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* Typography component for displaying a heading */}
        <Typography sx={{ fontFamily: "fantasy" }} variant='h2'>
          This is a CRUD application
        </Typography>
        {/* Typography component for displaying a subheading */}
        <Typography sx={{ fontFamily: "fantasy" }} variant='h3'>
          By MERN stack
        </Typography>
      </Box>
    </div>
  );
}

export default About;
