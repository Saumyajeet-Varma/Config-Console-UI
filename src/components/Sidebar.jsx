import { Home, LogOut, Menu, Settings, User, X } from "lucide-react";
import SidebarItem from "./SidebarItem"

const Sidebar = ({ open, setOpen }) => {

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
                    <SidebarItem icon={<Home size={18} />} label="Dashboard" open={open} />
                    <SidebarItem icon={<User size={18} />} label="Profile" open={open} />
                    <SidebarItem icon={<Settings size={18} />} label="Settings" open={open} />
                </nav>
            </div>

            <SidebarItem icon={<LogOut size={18} />} label="Logout" open={open} />
        </aside>
    );
}

export default Sidebar