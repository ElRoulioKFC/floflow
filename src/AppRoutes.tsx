import React from "react"
import { Route, Routes } from "react-router-dom"
import { NotFoundPage } from "./Pages"
import { HomePage } from "./Home"

export function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    )
    }