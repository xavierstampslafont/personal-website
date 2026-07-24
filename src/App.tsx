import React from "react"
import { Navigate, Route, Routes } from "react-router"
import "./App.css"
import { Background } from "./components/index.js"
import { HomeScreen } from "./screens/index.js"

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
