import TableInfiniteScrolling from "@/components/dashboard/TableInfiniteScrolling";
import TablePaginated from "@/components/dashboard/TablePaginated";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Columns3, GalleryVerticalEnd, type LucideIcon, NotebookTabs, UserRoundPen } from "lucide-react";

type TabsWithIconProps = {
  tabs: {
    name: string;
    value: string;
    icon: LucideIcon;
    content: React.ReactNode;
  }[];
};

const tabs: TabsWithIconProps["tabs"] = [
  {
    name: "Paginated Table",
    value: "paginated",
    icon: Columns3,
    content: (
      <>
        <TablePaginated />
      </>
    ),
  },
  {
    name: "Infinite Scroll",
    value: "scroll",
    icon: GalleryVerticalEnd  ,
    content: (
      <>
        <TableInfiniteScrolling />
      </>
    ),
  },
];

const TableTabPreview = () => {
  return (
    <div className="">    
      <Tabs defaultValue={tabs[0].value} className="gap-4">
        <TabsList>
          {tabs.map(({ icon: Icon, name, value }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex items-center gap-1 px-2.5 sm:px-3"
            >
              <Icon />
              {name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TableTabPreview;
