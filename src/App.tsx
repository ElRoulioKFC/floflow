import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { AppRoutes } from "./AppRoutes"

import { Link } from "react-router-dom";
import { Button, Stack, Typography, Box } from '@mui/material'
import { AccessibilityNew } from '@mui/icons-material'

function App() {

  return (
    <Box
      sx={{ padding: 2 }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}

        sx={{
          marginBottom: 2,
        }}
      >
        <AccessibilityNew fontSize="large" />
        <Link to="/">
          <Typography variant="h3">TEST</Typography>
        </Link>
        <AccessibilityNew fontSize="large" />

      </Stack>
      <AppRoutes />
    </Box>
  )
}

export default App
