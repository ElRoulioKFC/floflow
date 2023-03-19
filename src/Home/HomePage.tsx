import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

export function HomePage() {
    return (
        <>
           
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Stack direction="row" spacing={2}>
                    <Link to="/cryptage">
                        <Typography variant="h4">Enigma</Typography>
                    </Link>
                    
                </Stack>
            </Box>
        </>
    );
}