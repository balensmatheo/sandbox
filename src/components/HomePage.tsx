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
            <Button variant="contained" color="primary" size="large" onClick={() => navigate('/game')}>
                Clique ici
            </Button>
        </Box>
    );
};

export default HomePage;
