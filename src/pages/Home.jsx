import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: "url(https://img.freepik.com/premium-photo/mountain-lake-with-snow-capped-mountains-background_902338-14644.jpg)",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '2rem',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          PostcardPal
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Share your adventures with custom postcards!
        </Typography>
        <Button
          component={Link}
          to="/create"
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
        >
          Create Postcard
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
