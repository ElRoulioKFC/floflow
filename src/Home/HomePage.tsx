import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

export function HomePage() {
    return (
        <>
            <Typography variant="h3">Bienvenue et bravo</Typography>
            <Typography variant="h4">Vous avez réussi à trouver la première énigme</Typography>
            <Typography variant="h4">Vous pouvez maintenant accéder aux prochaines énigmes</Typography>
            <Typography variant="h4">Pour cela, il vous suffit de cliquer sur les liens ci-dessous</Typography>
            <Typography variant="h4">Bonne chance</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Stack direction="row" spacing={2}>
                    <Link to="/enigme2">
                        <Typography variant="h4">Enigme 2</Typography>
                    </Link>
                    <Link to="/enigme3">
                        <Typography variant="h4">Enigme 3</Typography>
                    </Link>
                </Stack>
            </Box>
        </>
    );
}