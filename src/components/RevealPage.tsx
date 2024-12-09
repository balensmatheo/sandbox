import React from 'react';
import { Box, Typography, CardContent } from '@mui/material';

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
               Regarde dans ton doudou pingouin
            </Typography>
                <CardContent>
                </CardContent>
        </Box>
    );
};

export default RevealPage;
