import { Link } from "react-router-dom";

const SidebarItem = ({ icon, label, open, to, onClick }) => {

    const className = "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/30 dark:hover:bg-white/10 transition text-black dark:text-white cursor-pointer";

    if (onClick) {
        return (
            <div onClick={onClick} className={className}>
                {icon}
                {open && <span>{label}</span>}
            </div>
        );
    }

    return (
        <Link to={to} className={className}>
            {icon}
            {open && <span>{label}</span>}
        </Link>
    );
};

export default SidebarItem;