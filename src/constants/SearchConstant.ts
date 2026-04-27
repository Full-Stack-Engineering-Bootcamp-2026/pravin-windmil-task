// data/searchData.ts
import { menuItems } from "@/components/common/AppSideBar";

type SearchItem = {
  title: string;
  path: string;
  keywords: string[];
};

export const searchData: SearchItem[] = [
  {
    title: "Dashboard",
    path: "/component/dashboard",
    keywords: ["dashboard", "home", "overview"],
  },
  {
    title: "Forms",
    path: "/component/forms",
    keywords: ["form", "input", "validation", "zod", "react hook form"],
  },
  {
    title: "Cards",
    path: "/component/cards",
    keywords: ["card", "ui", "component"],
  },
  {
    title: "Charts",
    path: "/component/charts",
    keywords: ["chart", "graph", "line", "doughnut", "chartjs"],
  },
  {
    title: "Buttons",
    path: "/component/buttons",
    keywords: ["button", "click", "action"],
  },
  {
    title: "Modals",
    path: "/component/modals",
    keywords: ["modal", "dialog", "alert dialog", "shadcn dialog", "popup"],
  },
  {
    title: "Tables",
    path: "/component/tables",
    keywords: ["table", "pagination", "infinite scroll", "tanstack"],
  },

  {
    title: "Login",
    path: "/component/login",
    keywords: ["login", "sign in", "auth"],
  },
  {
    title: "Register",
    path: "/component/signup",
    keywords: ["register", "sign up", "signup"],
  },
  {
    title: "404",
    path: "/component/404",
    keywords: ["404", "not found", "error page"],
  },
  {
    title: "Forgot Password",
    path: "/component/password",
    keywords: ["forgot", "password", "reset"],
  },
];
