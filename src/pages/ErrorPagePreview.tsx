import TemplatePage from "@/components/templates/TemplatePage";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

function ErrorPagePreview() {
  return (
    <TemplatePage
      imgUrl={
        "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/error/image-1.png"
      }
      children={
        <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
          <h2 className="mb-6 text-5xl font-semibold">Whoops!</h2>
          <h3 className="mb-1.5 text-3xl font-semibold">
            Something went wrong
          </h3>

          <Button asChild size="lg" className="rounded-lg text-base">
            <Link to={"/component/dashboard"} >Back to home page</Link>
          </Button>
        </div>
      }
    />
  );
}

export default ErrorPagePreview;
