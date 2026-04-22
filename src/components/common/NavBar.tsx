import { Input } from "../ui/input";
import { ModeToggle } from "../theme/ToggleMode";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import NotificationDropDown from "../NotificationDropDown";
import { useSidebar } from "../ui/sidebar";
import ProfileDropDown from "../ProfileDropDown";


export default function NavBar() {
  const {state} = useSidebar()
  return (
    <div className="flex items-center justify-between w-full ">
      <Link to="/"   className={`  flex items-center gap-2`}>
        <span className="text-xl  font-semibold whitespace-nowrap">
          MBBlocks
        </span>
      </Link>

      <div className="flex    bg-secondary/45 py-1   px-8 rounded-xl  border border-input justify-center items-center gap-2 group ">
        <FaSearch className="text-gray-500 hidden md:block  group-focus-within:text-secondary-foreground transition-colors duration-200  " />

        <Input
          placeholder="Search"
          className="w-64 hidden md:block focus:outline-none  focus:ring-0 focus-visible:ring-0 border-0 bg-transparent "
        />
      </div>

      <div className="flex items-center gap-4">
        <ul className="hidden md:flex items-center gap-4">
          <li>

                <ModeToggle />
          </li>
          <li>
            <NotificationDropDown/>
          </li>
           <li>
            <ProfileDropDown/>
          </li>
        </ul>
    
      </div>
    </div>
  );
}
