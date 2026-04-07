import { Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import ErrorPage from "./pages/ErrorPage"

const App = () => {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />

    </Routes>
  )
}

export default App