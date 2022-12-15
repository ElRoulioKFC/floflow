import React from "react"
import { Route, Routes } from "react-router-dom"
import { NotFoundPage,EnigmeDeux,ListName,EnigmeTrois } from "./Pages"
import { HomePage } from "./Home"

export function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/enigme2" element={<EnigmeDeux />} />
            <Route path="/1798741" element={<ListName />} />
            <Route path="/enigme3" element={<EnigmeTrois />} />

        </Routes>
    )
    }