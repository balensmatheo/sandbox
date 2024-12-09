import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GamePage: React.FC = () => {
    const [clue, setClue] = useState<string>('');
    const navigate = useNavigate();

    const handleClueSubmit = () => {
        console.log(clue)
        if (clue.toLowerCase() === 'grosbibiquejaime') {
            navigate('/reveal');
        } else {
            alert('Indice incorrect, essaye encore !');
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            textAlign="center"
        >
            <Typography variant="h4" gutterBottom>
                Entre le mot de passe ultra secret et tu sauras :)
            </Typography>
            <TextField
                label="Entrez votre réponse ici"
                variant="outlined"
                value={clue}
                onChange={(e) => setClue(e.target.value)}
                sx={{ mb: 2, width: '300px' }}
            />
            <Button variant="contained" color="primary" onClick={handleClueSubmit}>
                Soumettre
            </Button>
        </Box>
    );
};

export default GamePage;
