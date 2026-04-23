import { Button } from "@/components/ui/button";
import React from "react";

import { FaHeart } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";

function ButtonsPreview() {
  return (
    <>
      <div className="flex flex-wrap gap-2 pb-2">
        <Button className=" px-4 py-4" size={"lg"}>
          {" "}
          Larger Button
        </Button>
        <Button size={"lg"}>Large Button</Button>
        <Button size={"default"}>Regular</Button>
        <Button
          disabled
          className="disabled:cursor-not-allowed disabled:opacity-50"
          size={"lg"}
        >
          Disable
        </Button>
        <Button size={"sm"}>small</Button>
      </div>
      <p className="text-muted-foreground  text-base font-normal">
        Apply w-full to any button to create a block level button.
      </p>
         <div>
        <h2 className="text-lg font-semibold mb-2">Variants</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      
  
       <div>
        <h2 className="text-lg font-semibold mb-2">With Icons</h2>
        <div className="flex flex-wrap gap-2">

          <Button className="flex items-center gap-2">
            Like <FaHeart />
          </Button>

          <Button className="flex items-center gap-2">
            <FaHeart /> Like
          </Button>

          <Button size="icon">
            <FaHeart />
          </Button>

          <Button size="icon" variant="outline">
            <RiPencilFill />
          </Button>

        </div>
        </div>
    </>
  );
}

export default ButtonsPreview;
