import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AvatarFallback, AvatarImage, Avatar } from "../ui/avatar";
import { useEffect, useState } from "react";
import type { CharacterResponse } from "@/types/characterResponseType";
import { fetchCharacters } from "@/services/characterApi";
import { toast } from "sonner";
import TableSkeleton from "./TableSkeleton";
import { Badge } from "../ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function TablePaginated() {
  const [characters, setCharacters] = useState<CharacterResponse>();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetechChars = async () => {
      try {
        setLoading(true);
        const res = await fetchCharacters(page);
        console.log(res);

        setCharacters(res);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Error while fetching data!");
      }
    };
    fetechChars();
  }, [page]);

  const handleNext = () => {
    if (characters?.info.next) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (characters?.info.prev) {
      setPage((prev) => prev - 1);
    }
  };
  if (loading) {
    return <TableSkeleton />;
  }

  return (
    <div className="w-full bg-card rounded-md border border-border">
      <div className="overflow-auto max-h-[400px]">
      <Table className="text-sm min-w-[600px]">
          <TableHeader className="sticky top-0 z-10 bg-card">
            <TableRow>
              <TableHead>Character </TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {characters?.results.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage alt={user.name} src={user.image} />
                      <AvatarFallback>{user.name.at(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col ">
                      <span className="font-medium">{user.name}</span>
                      <span className="font-normal text-xs text-muted-foreground">
                        {user.species}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>
                  {" "}
                  <Badge> {user.status}</Badge>{" "}
                </TableCell>
                <TableCell>{user.location.name}</TableCell>
                <TableCell>  {new Date(user.created).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="border-t border-border px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span className="text-sm text-muted-foreground">
          Total Pages: {characters?.info.pages}
        </span>
        <Pagination className="w-auto mx-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={handlePrev}
                className={
                  !characters?.info.prev
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive>{page}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={handleNext}
                className={
                  !characters?.info.next
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
