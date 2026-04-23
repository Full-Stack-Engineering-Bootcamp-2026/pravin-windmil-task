import HomeLayout from "@/components/layout/HomeLayout";
import UpcomingFeature from "@/components/UpcomingFeature";
import ButtonsPreview from "@/pages/ButtonsPreview";
import ChartPreview from "@/pages/ChartPreview";
import { ComponentPage } from "@/pages/ComponentPage";
import DashboardPage from "@/pages/DashboardPreview";
import Feed from "@/pages/Feed";
import Home from "@/pages/Home";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<HomeLayout />}>
          
            <Route index element={<Home />} />

            <Route path="component">
              <Route
                path="dashboard"
                element={<ComponentPage title="Dashboard"  preview = {<DashboardPage/>} />}
              />
              <Route
                path="buttons"
                element={<ComponentPage title="Buttons" preview={<ButtonsPreview/>} />}
              />
               <Route
                path="forms"
                element={<ComponentPage title="Forms" />}
              />
                <Route
                path="cards"
                element={<ComponentPage title="Cards" />}
              />
                <Route
                path="charts"
                element={<ComponentPage title="Charts"   preview={<ChartPreview/>}  />}
              />
                <Route
                path="modals"
                element={<ComponentPage title="Modals" />}
              />
              <Route
                path="tables"
                element={<ComponentPage title="Tables" />}
              />
               <Route
                path="pages"
                element={<ComponentPage title="Pages" />}
              />
              

            </Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
