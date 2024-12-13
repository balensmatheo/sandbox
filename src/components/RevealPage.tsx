import React from 'react';
import { Box, Typography, CardContent } from '@mui/material';
import {Image} from "@aws-amplify/ui-react";

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
                    <Image src={"src/assets/pingouin.gif"} alt={"pingouin"} />
                </CardContent>
        </Box>
    );
};

export default RevealPage;
