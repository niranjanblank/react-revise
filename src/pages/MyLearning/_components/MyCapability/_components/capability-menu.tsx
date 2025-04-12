import { LucideIcon } from "lucide-react";

interface CapabilityMenuProp{
    title: string,
    icon: LucideIcon
}

const CapabilityMenu = ({title, icon: Icon}: CapabilityMenuProp) => {
    return ( 
        <div className="shadow-lg relative flex items-center justify-center gap-2 border-1 
        border-gray-400 p-4 rounded-lg text-2xl font-bold 
        text-violet-700
        hover:bg-gray-100">
            <Icon size={30} /> {title}
            {/* notification */}
            <p className="absolute -top-4 -right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full p-1 
            text-white text-sm
            bg-red-500">5</p>
        </div>
     );
}
 
export default CapabilityMenu
