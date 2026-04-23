import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

function BigSectionCard() {
  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle>Big Section Card</CardTitle>
      
        <CardAction>
          <Button variant="link">Button</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        Large, full width sections goes here
      </CardContent>
     
    </Card>
  );
}

export default BigSectionCard;
