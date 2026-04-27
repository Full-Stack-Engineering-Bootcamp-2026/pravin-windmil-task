import type { ReactNode } from "react";

type Props = {
  color?: string;
  children: ReactNode;
  imgUrl?: string;
};

export default function TemplatePage({ children, color, imgUrl }: Props) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        {color && <div className={`h-full w-full object-cover ${color}`}></div>}
        {imgUrl && <img src={imgUrl} alt="alt" />}
      </div>

      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </div>
    </div>
  );
}
