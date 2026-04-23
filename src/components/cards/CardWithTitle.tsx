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

function CardWithTitle() {
  return (
    <div>
      <h1 className="font-medium text-base  ">Resposive Cards</h1>

      <div className="flex flex-col  md:flex-row gap-4">
        <Card className="w-full max-w-full">
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, hic
            rem! Assumenda rem esse pariatur ut vitae adipisci consequatur
            nihil, illo obcaecati quibusdam eum? Maiores ducimus cum unde
            voluptas nulla?
          </CardContent>
        </Card>
                <Card   className="w-full max-w-full bg-secondary">
          <CardHeader>
            <CardTitle>Colord Card</CardTitle>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, hic
            rem! Assumenda rem esse pariatur ut vitae adipisci consequatur
            nihil, illo obcaecati quibusdam eum? Maiores ducimus cum unde
            voluptas nulla?
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CardWithTitle;
