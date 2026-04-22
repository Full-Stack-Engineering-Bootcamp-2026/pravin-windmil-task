import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



import { IoIosNotifications } from "react-icons/io";
function NotificationDropDown() {
  return (

    <DropdownMenu  >
  <DropdownMenuTrigger asChild >
    <Button variant="outline">
        <IoIosNotifications className=""/>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent side="bottom" className=" mr-16">
    <DropdownMenuGroup>
     
      <DropdownMenuItem>Messages</DropdownMenuItem>
      <DropdownMenuItem>Sales</DropdownMenuItem>
        <DropdownMenuItem>Alerts</DropdownMenuItem>
    </DropdownMenuGroup>
  
  </DropdownMenuContent>
</DropdownMenu>

)
}

export default NotificationDropDown