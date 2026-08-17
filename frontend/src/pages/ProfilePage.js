import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const ProfilePage = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1">
            Meu Perfil
          </Typography>
          <Typography sx={{ mt: 2, color: 'text.secondary' }}>
            Gerencie suas informações pessoais, documentos e configurações
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default ProfilePage;
