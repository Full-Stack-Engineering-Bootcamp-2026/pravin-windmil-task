import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { searchData } from "@/constants/SearchConstant";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const results =
    query.trim().length === 0
      ? []
      : searchData.filter((item) => {
          const q = query.toLowerCase();
          return (
            item.title.toLowerCase().includes(q) ||
            item.keywords.some((k) => k.includes(q))
          );
        });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (path: string) => {
    navigate(path);
    setQuery("");
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" size={16} />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
        />
      </InputGroup>

      {open && results.length > 0 && (
        <div className="absolute top-full mt-1 w-full z-50 bg-popover border border-border rounded-md shadow-md overflow-hidden">
          {results.map((item) => (
            <button
              key={item.path}
              onClick={() => handleSelect(item.path)}
              className="w-full text-left px-4 py-2.5 text-sm hover:bg-accent flex items-center gap-2 transition-colors"
            >
              <SearchIcon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      )}

      {open && query.trim().length > 0 && results.length === 0 && (
        <div className="absolute top-full mt-1 w-full z-50 bg-popover border border-border rounded-md shadow-md px-4 py-3 text-sm text-muted-foreground">
          No results for "{query}"
        </div>
      )}
    </div>
  );
}
