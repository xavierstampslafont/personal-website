import { Background } from "#/components/Background.js"
import { HomeScreen } from "#/screens/home/HomeScreen.js"
import React from "react"
import { Navigate, Route, Routes } from "react-router"
import "./App.css"

export const App = () => (
  <>
    <Background />
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
)
