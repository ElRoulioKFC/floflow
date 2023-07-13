import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { ListObject } from "../Components";

export function HomePage() {
    return (
        <>
           
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Stack direction="row" spacing={2}>
                    <ListObject />
                    
                </Stack>
            </Box>
        </>
    );
}