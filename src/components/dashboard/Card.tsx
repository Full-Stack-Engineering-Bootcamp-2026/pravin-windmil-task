import { Card, CardContent } from "@/components/ui/card";

import { Avatar, AvatarFallback } from "../ui/avatar";
import type { LucideIcon } from "lucide-react";
import useCount from "@/hooks/useCount";

type Props = {
  title: string;
  icon: LucideIcon;
  number: number;
  color: string;
};

function CardComp({ title, icon: Icon, number, color }: Props) {
  const count = useCount(number);
  return (
    <Card className="bg-card border border-border">
      <CardContent>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className={`${color}`}>
              <Icon className="text-white" size={18} />
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1">
            <h1 className="text-muted-foreground text-sm font-medium">
              {title}
            </h1>
            <span className="font-bold text-xl">{count}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardComp;
