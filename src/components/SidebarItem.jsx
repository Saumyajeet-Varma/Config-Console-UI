import { Link } from "react-router-dom";

const SidebarItem = ({ icon, label, open }) => {

    return (
        <Link
            to="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/30 dark:hover:bg-white/10 transition text-black dark:text-white"
        >
            {icon}
            {open && <span>{label}</span>}
        </Link>
    );
}

export default SidebarItem