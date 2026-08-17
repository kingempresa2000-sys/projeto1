import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const RidePage = () => {
  const { rideId } = useParams();

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1">
            Viagem #{rideId}
          </Typography>
          <Typography sx={{ mt: 2, color: 'text.secondary' }}>
            Detalhes da viagem e rastreamento em tempo real
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default RidePage;
