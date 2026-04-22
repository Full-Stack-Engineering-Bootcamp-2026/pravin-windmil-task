import { fetchCharacters } from "@/services/characterApi";
import type { Character } from "@/types/characterResponseType";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
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
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import TableSkeleton from "./TableSkeleton";

function TableInfiniteScrolling() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (loading || !hasMore) return;

      try {
        setLoading(true);
        const res = await fetchCharacters(page);

        setCharacters((prev) => [...prev, ...res.results]);

        if (!res.info.next) {
          setHasMore(false);
        }
      } catch (error) {
        toast.error("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  // below block is from ai but i understood this
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading]);

  const loaderRef = useRef<HTMLDivElement | null>(null);
  if (loading && characters.length === 0) {
    return <TableSkeleton />;
  }
  return (
 <div className=" bg-card  overflow-y-auto h-100   rounded-md border  border-border    ">
      <Table className="text-sm min-w-[600px] ">
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
          {characters.map((user) => (
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
              <TableCell>{user.created}</TableCell>
            </TableRow>

          ))}
           <TableRow>
    <TableCell colSpan={5}>
      <div ref={loaderRef} className="text-center py-4">
        {loading
          ? "Loading..."
          : hasMore
          ? "Scroll to load more"
          : "No more characters"}
      </div>
    </TableCell>
  </TableRow>
        </TableBody>
       
      </Table>
  
     

     
    </div>
  );
}

export default TableInfiniteScrolling;
