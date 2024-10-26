import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import { Background } from "./components"
import { HomeScreen } from "./screens"

const App = () => (
  <>
    <Background />
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
)

export default App
