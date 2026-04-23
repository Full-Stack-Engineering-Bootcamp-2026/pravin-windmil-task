import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "./MultiSelect";
import { Textarea } from "../ui/textarea";
const options = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "next" },
  { label: "Node.js", value: "node" },
];
function FormElement() {
    const [selected, setSelected] = useState<string[]>([]);
  return (
    <div className="bg-card  rounded-md p-2">
      <h1 className="font-normal text-muted-foreground text-md pb-2">
        Form Elements
      </h1>
      <div className="flex flex-col gap-2">
        <Label htmlFor="name" className="">
          Name
        </Label>
        <Input id="name" type="text" placeholder="John Daie" className="" />
        <Label htmlFor="account" className="">
          Account Type
        </Label>
        <RadioGroup defaultValue="comfortable" className="w-fit flex">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="personal" id="r2" />
            <Label htmlFor="r2">Personal</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="Business" id="r3" />
            <Label htmlFor="r3">Business</Label>
          </div>
        </RadioGroup>

        <Label htmlFor="request" className="">
          Requestion Limit
        </Label>
        <div id="request">
          <Select>
            <SelectTrigger className="w-full max-w-48 ">
              <SelectValue className="" placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <MultiSelect
        options={options}
        selected={selected}
        onChange={setSelected}
      />
      <Label htmlFor="name" className="">
          Messages
        </Label>
         <Textarea  placeholder="Type your message here." />

      </div>
    </div>
  );
}

export default FormElement;
