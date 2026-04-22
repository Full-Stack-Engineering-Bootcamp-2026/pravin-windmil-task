import { Button } from "@/components/ui/button";
import React from "react";

import { FaHeart } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";

function ButtonsPreview() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-baseline pb-2 gap-2 ">
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

      
   <h1 className=" text-xl font-semibold py-2 ">Icons</h1>
      <div className="flex flex-col md:flex-row items-center pb-2 gap-2   ">
        <Button size={"lg"} className="flex items-center">
          {" "}
          <span>Icon Right</span> <FaHeart />{" "}
        </Button>

        <Button size={"lg"} className="flex items-center">
          {" "}
          <FaHeart /> <span>Icon Right</span>{" "}
        </Button>
         <Button  size={"lg"} className="flex items-center">
          {" "}
          <FaHeart />
          
        </Button>
          <Button  size={"lg"} className="flex items-center rounded-full">
         <RiPencilFill/>
          </Button>
      </div>
    </>
  );
}

export default ButtonsPreview;
