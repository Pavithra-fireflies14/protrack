import React from 'react';
import { Button, Typography } from '@mui/material';

const SampleComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Typography variant="h4" gutterBottom>
        Hello, Material-UI and Tailwind CSS!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
};

export default SampleComponent;
