import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const DashboardPage = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1">
            Dashboard - Transporte de Moto
          </Typography>
          <Typography sx={{ mt: 2, color: 'text.secondary' }}>
            Bem-vindo ao seu dashboard! Aqui você poderá solicitar viagens, gerenciar suas atividades e muito mais.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default DashboardPage;
