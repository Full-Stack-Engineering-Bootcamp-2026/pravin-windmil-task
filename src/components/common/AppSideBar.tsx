import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { FaAffiliatetheme } from "react-icons/fa6";
import { Link } from "react-router-dom"

import {
  LayoutDashboard,
  FileText,
  CreditCard,
  PieChart,
  MousePointerClick,
  SquareStack,
  Table,
  File,
  User,
} from "lucide-react"

export const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/component/dashboard",
  },
  {
    title: "Forms",
    icon: FileText,
    path: "/component/forms",
  },
  {
    title: "Cards",
    icon: CreditCard,
    path: "/component/cards",
  },
  {
    title: "Charts",
    icon: PieChart,
    path: "/component/charts",
  },
  {
    title: "Buttons",
    icon: MousePointerClick,
    path: "/component/buttons",
  },
  {
    title: "Modals",
    icon: SquareStack,
    path: "/component/modals",
  },
  {
    title: "Tables",
    icon: Table,
    path: "/component/tables",
  },
  {
    title: "Pages",
    icon: File,
    path: "/component/pages",
    children: [
      { title: "Login", path: "/pages/login" },
      { title: "Register", path: "/pages/register" },
      { title: "404", path: "/pages/404" },
    ],
  },
]

export function AppSidebar() {

  const {state} = useSidebar()
  return (
    <Sidebar collapsible="icon">   

      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {state === "collapsed" ? (
             
              
                <SidebarTrigger  size={"lg"} className="p-0  "/>
         
            ) : (
            
              <SidebarMenuButton size="lg" asChild>
                <Link to="/">
                  <FaAffiliatetheme className="shrink-0" />
                  <span className="font-bold text-heading text-lg">
                    MBBlocks
                  </span>
                </Link>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <Link to={item.path}>
                  <item.icon />
                  <span>{item.title}</span>  
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Profile">
              <Link to="/profile">
                <User />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

    </Sidebar>
  )
}