import { HomeIcon, LucideIcon } from "lucide-react";

interface NavItemProps {
    title: string;
    icon: LucideIcon;
    link: string;
}

const NavItem = ({title , icon: Icon, link}: NavItemProps) => {
    return ( 
        <a className="flex gap-2 items-center h-full text-md hover:bg-zinc-600 cursor px-2">
            <Icon className="w-5 h-5" />
        <span>{title}</span>
    </a> );
}
 
export default NavItem;