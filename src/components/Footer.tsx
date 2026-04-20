

import { Button } from "@/components/ui/button"
import { FaXTwitter } from "react-icons/fa6";
const YEAR = new Date().getFullYear()

export default function Footers01() {
  return (
    <footer className="pt-4 pb-4 bottom-0 px-8 border-t">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-2 md:justify-between">
          <p className="text-foreground text-center text-sm font-medium">
            All rights reserved. Copyright &copy; {YEAR} MBBlocks.
          </p>
          <div className="flex gap-1">
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a href="#" aria-label="Twitter">
                <FaXTwitter className="h-4 w-4" />
              </a>
              </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
