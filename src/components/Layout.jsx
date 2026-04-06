import { Link, Navigate, Outlet } from "react-router-dom"

const Layout = () => {

    const isLoggedIn = false;

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    }

    return (
        <div className="p-10">

            {/* Navbar */}
            <nav className="flex gap-4 mb-6">
                <Link to="/" className="text-blue-500">Home</Link>
                <Link to="/dashboard" className="text-blue-500">Dashboard</Link>
                <Link to="/docs" className="text-blue-500">Docs</Link>
                <Link to="/profile" className="text-blue-500">Profile</Link>
            </nav>

            {/* Page Content */}
            <Outlet />

        </div>
    )
}

export default Layout