import {
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { AppSidebar } from "../common/AppSideBar";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex flex-col flex-1">
          <header className="sticky top-0 z-30 h-16 border-b border-border  flex items-center px-4 gap-4  backdrop-blur-md bg-background/50">
            <TriggerWhenExpanded />

            <NavBar />
          </header>

          <main className="flex-1 overflow-y-auto p-3 md:p-6 min-w-0 overflow-x-hidden">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}

function TriggerWhenExpanded() {
  const { state, isMobile } = useSidebar();

  if (isMobile) return <SidebarTrigger size="lg" />;
  if (state === "collapsed") return null;

  return <SidebarTrigger size={"lg"} />;
}

export default HomeLayout;
