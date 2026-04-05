import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
  return (
    <div className="p-10">

      {/* Navbar */}
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/login" className="text-blue-500">Login</Link>
        <Link to="/register" className="text-blue-500">Register</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  )
}

export default App