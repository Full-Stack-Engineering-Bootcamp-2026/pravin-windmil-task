import CardsSection from "@/components/dashboard/CardsSection";
import TableComp from "@/components/dashboard/TablePaginated";
import React from "react";
import TableTabPreview from "./TableTabPreview";
import TablePaginated from "@/components/dashboard/TablePaginated";
import ChartComp from "@/components/dashboard/ChartComp";

function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 w-full min-w-0 overflow-hidden p-4">
      <CardsSection />
      <TableTabPreview />
      <ChartComp/>
    </div>
  );
}

export default DashboardPage;
