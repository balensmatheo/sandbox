import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const RevealPage: React.FC = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            textAlign="center"
        >
            <Typography variant="h3" gutterBottom>
                On va passer une nuit avec les animaux à pairi daiza
            </Typography>
            <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    height="400"
                    image="/path/to/zoo-image.jpg"
                    alt="Zoo Pairi Daiza"
                />
                <CardContent>
                </CardContent>
            </Card>
        </Box>
    );
};

export default RevealPage;
