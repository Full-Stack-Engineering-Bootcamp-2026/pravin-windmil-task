import TablePaginated from "@/components/dashboard/TablePaginated";
import HomeLayout from "@/components/layout/HomeLayout";
import Modal from "@/components/modal/Modal";
import UpcomingFeature from "@/components/UpcomingFeature";
import ButtonsPreview from "@/pages/ButtonsPreview";
import CardsPreview from "@/pages/CardsPreview";
import ChartPreview from "@/pages/ChartPreview";
import { ComponentPage } from "@/pages/ComponentPage";
import DashboardPage from "@/pages/DashboardPreview";
import ErrorPagePreview from "@/pages/ErrorPagePreview";
import Feed from "@/pages/Feed";
import FormPreview from "@/pages/FormPreview";
import Home from "@/pages/Home";
import LoginTemplatePreview from "@/pages/LoginTemplatePreview";
import PasswordChangePreview from "@/pages/PasswordChangePreview";
import SignupTemplatePreview from "@/pages/SignupTemplatePreview";
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
                element={
                  <ComponentPage
                    title="Dashboard"
                    preview={<DashboardPage />}
                  />
                }
              />
              <Route
                path="buttons"
                element={
                  <ComponentPage title="Buttons" preview={<ButtonsPreview />} />
                }
              />
              <Route
                path="forms"
                element={
                  <ComponentPage title="Forms" preview={<FormPreview />} />
                }
              />
              <Route
                path="cards"
                element={
                  <ComponentPage title="Cards" preview={<CardsPreview />} />
                }
              />
              <Route
                path="charts"
                element={
                  <ComponentPage title="Charts" preview={<ChartPreview />} />
                }
              />
              <Route
                path="modals"
                element={<ComponentPage title="Modals" preview={<Modal />} />}
              />
              <Route path="tables" element={<ComponentPage title="Tables"  preview = { <TablePaginated/>}/>} />
              <Route path="pages" element={<ComponentPage title="Pages" />} />
              <Route
                path="login"
                element={
                  <ComponentPage
                    title="Login Template"
                    preview={<LoginTemplatePreview />}
                  />
                }
              />
              <Route
                path="signup"
                element={
                  <ComponentPage
                    title="Signup Template"
                    preview={<SignupTemplatePreview />}
                  />
                }
              />
              <Route
                path="password"
                element={
                  <ComponentPage
                    title="Forgot Password Template"
                    preview={<PasswordChangePreview />}
                  />
                }
              />
                <Route
                path="404"
                element={
                  <ComponentPage
                    title="Erro 404 Template"
                    preview={<ErrorPagePreview />}
                  />
                }
              />
            </Route>
           </Route>
          <Route path="*" element = { <ErrorPagePreview/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
