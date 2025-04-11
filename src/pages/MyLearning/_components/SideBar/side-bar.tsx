import { BookMarked, LucideLayoutDashboard, Medal, Target, Trophy } from "lucide-react";
import SidebarItem from "./side-bar-nav-items";

const SideBar = () => {
    return ( 
        <div className="col-span-1 5 min-h-70/100 flex flex-col gap-2 shadow-lg rounded-b-lg">
                {/* sidebar content */}
                <div className="flex flex-col bg-violet-700 w-full text-white px-4 py-6 rounded-t-lg" >
                    <h1 className="text-3xl w-10 font-semibold">Admin User</h1>
                    <span>Email: test@acorn.com</span>
                    <div className="flex justify-end mt-10">
                        <button className=" border-2 rounded-3xl py-1 px-2 text-sm hover:bg-violet-600">View More</button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <SidebarItem title="Overview" link="/overview" icon={LucideLayoutDashboard}/>
                    <SidebarItem title="My Capability" link="/overview" icon={Target}/>
                    <SidebarItem title="Training History" link="/overview" icon={Trophy}/>
                    <SidebarItem title="Bookmarks" link="/overview" icon={BookMarked}/>
                    <SidebarItem title="Achievement" link="/overview" icon={Medal}/>
                </div>
        </div>
     );
}
 
export default SideBar;