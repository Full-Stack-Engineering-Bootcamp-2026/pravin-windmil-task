import { Import } from "lucide-react";
import "./App.css";
import { Button } from "./components/ui/button";

import AppRouter from "./routes/AppRouter";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <AppRouter />
      <Toaster/>
    </>
  );
}

export default App;
