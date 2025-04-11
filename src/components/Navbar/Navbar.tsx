import { Calendar, Home, HomeIcon, User } from "lucide-react";
import NavItem from "./_components/nav-item";

const Navbar = () => {
    return ( 
    <div className="w-full bg-gray-800 text-white h-20 items-center flex flex-start  px-10 gap-10
    shadow-2xl
    ">
      <NavItem title="Home" icon={Home} link="/"/>
      <NavItem title="My Learning" icon={User} link="/mylearning"/>
      <NavItem title="Home" icon={Calendar} link="/calendar"/>
    </div> );
}
 
export default Navbar;