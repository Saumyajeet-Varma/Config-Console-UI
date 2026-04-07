import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const menu = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
]

const Layout = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();

    const activeTab = menu.find(item => item.path === location.pathname)?.name || "";

    return (
        <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden font-montserrat">
            {/* Background blobs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500 opacity-30 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-400 opacity-20 rounded-full blur-3xl" />
            <div className="absolute top-[40%] left-[30%] w-72 h-72 bg-orange-300 opacity-20 rounded-full blur-3xl" />

            <div className={`flex-1 flex flex-col h-full transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-20"}`}>
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

                <div className="flex-1 flex flex-col">
                    {/* Navbar */}
                    <Navbar activeTab={activeTab} />

                    {/* ONLY THIS SCROLLS */}
                    <main className="flex-1 overflow-y-auto">
                        <Outlet />
                    </main>

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout