import { Home, LogOut, Menu, Settings, User, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import axios from "../config/axios";
import SidebarItem from "./SidebarItem"

const Sidebar = ({ open, setOpen }) => {

    const { logout } = useAuth()

    const navigate = useNavigate()

    const handleLogout = async () => {

        try {
            const refreshToken = localStorage.getItem("refreshToken");

            if (refreshToken) {
                await axios.post("/auth/logout", { refreshToken });
            }

            logout()

            navigate("/login")

            toast.success("Logout successfully")
        }
        catch (err) {
            toast.error(err.response?.data?.message || "Login failed")
            console.error(err)
        }
    }

    return (
        <aside className={`${open ? "w-64" : "w-20"} h-screen fixed left-0 top-0 z-40 transition-all duration-300 backdrop-blur-xl bg-white/30 dark:bg-white/5 border-r border-white/20 p-4 flex flex-col justify-between`}>
            <div>
                <div className="flex items-center justify-between mb-8 ml-3">
                    {open && (
                        <h1 className="text-xl font-semibold text-black dark:text-white">
                            SV Console
                        </h1>
                    )}

                    <button
                        onClick={() => setOpen(!open)}
                        className="text-black dark:text-white"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="space-y-2">
                    <SidebarItem icon={<Home size={18} />} label="Dashboard" open={open} to="/dashboard" />
                    <SidebarItem icon={<User size={18} />} label="Profile" open={open} to="profile" />
                    <SidebarItem icon={<Settings size={18} />} label="Settings" open={open} to="settings" />
                </nav>
            </div>

            <SidebarItem icon={<LogOut size={18} />} label="Logout" open={open} onClick={handleLogout} />
        </aside>
    );
}

export default Sidebar