import { ArrowRight, ChevronRight, LucideIcon } from "lucide-react";

interface SidebarItemProps {
    title: string;
    icon: LucideIcon;
    link: string;
}

const SidebarItem = ({title , icon: Icon, link}: SidebarItemProps) => {
    return ( 
        <a className="flex gap-2 items-center justify-between h-full hover:bg-violet-400 cursor 
        p-2">
            <div className="flex items-center gap-2 text-md " >
                <Icon className="w-5 h-5" size={64} />
                <span className="font-semibold text-lg">{title}</span>
            </div>
            <ChevronRight/>
        </a> 
        );
}

export default SidebarItem
 