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
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { FaAffiliatetheme } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

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
  ChevronDown,
} from "lucide-react";

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
    children: [
      { title: "Login", path: "/component/login" },
      { title: "Register", path: "/component/signup" },
      { title: "404", path: "/component/404" },
      { title: "Forgot Password", path: "/component/password" },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();

  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {state === "collapsed" ? (
              <SidebarTrigger size="lg" className="p-0" />
            ) : (
              <SidebarMenuButton size="lg" asChild>
                <NavLink to="/">
                  <FaAffiliatetheme />
                  <span className="font-bold text-lg">MBBlocks</span>
                </NavLink>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => {
            if (item.children) {
              return (
                <Collapsible key={item.title} className="group">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        <item.icon />
                        <span>{item.title}</span>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <div className="ml-6 mt-1 flex flex-col gap-1">
                        {item.children.map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            className={({ isActive }) =>
                              `text-sm px-2 py-1 rounded-md transition ${
                                isActive
                                  ? "bg-secondary text-white"
                                  : "text-muted-foreground hover:bg-muted"
                              }`
                            }
                          >
                            {sub.title}
                          </NavLink>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              );
            }

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  isActive={location.pathname === item.path}
                >
                  <NavLink to={item.path}>
                    <item.icon />
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Profile">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "bg-primary text-white" : "hover:bg-muted"
                }
              >
                <User />
                <span>Profile</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
