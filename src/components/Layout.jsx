import { useState } from "react";
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden body-font">
            {/* Background blobs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500 opacity-30 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-400 opacity-20 rounded-full blur-3xl" />
            <div className="absolute top-[40%] left-[30%] w-72 h-72 bg-orange-300 opacity-20 rounded-full blur-3xl" />

            <div className="relative z-10 flex min-h-screen">
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

                <div className="flex-1 flex flex-col">
                    <Navbar />

                    {/* Page Content */}
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout