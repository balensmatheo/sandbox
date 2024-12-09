import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            textAlign="center"
            sx={{ backgroundImage: 'url(/path/to/background.jpg)', backgroundSize: 'cover' }}
        >
            <Typography variant="h2" gutterBottom>
                Tu veux connaitre ton cadeau ?
            </Typography>
            <Typography variant="h6" paragraph>
                Cliquez sur le bouton ci-dessous pour commencer votre quête.
            </Typography>
            <Button variant="contained" color="primary" size="large" onClick={() => navigate('/game')}>
                Commencer l'aventure
            </Button>
        </Box>
    );
};

export default HomePage;
