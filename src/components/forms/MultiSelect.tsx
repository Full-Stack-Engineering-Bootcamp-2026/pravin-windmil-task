
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

type Option = {
  label: string;
  value: string;
};

type MultiSelectProps = {
  options: Option[];
  selected: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
};

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select items",
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const toggleValue = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <Popover  open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="border  border-gray-600" asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between min-h-[40px]"
        >
          <div className="flex gap-1 flex-wrap">
            {selected.length > 0 ? (
              selected.map((value) => {
                const option = options.find((o) => o.value === value);
                return (
                  <Badge key={value} variant="secondary">
                    {option?.label}
                  </Badge>
                );
              })
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={() => toggleValue(option.value)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selected.includes(option.value)
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}