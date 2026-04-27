import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
  CardAction,
} from "@/components/ui/card";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { VscSparkleFilled } from "react-icons/vsc";
import { FaHandSparkles } from "react-icons/fa6";
function Modal() {
  return (
    <div className="flex  flex-col gap-2">
      <h1 className="font-medium text-base text-muted-foreground">
        Dialog in Shadcn
      </h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <h1 className="font-medium text-base text-muted-foreground">
        Alert Dialog{" "}
      </h1>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div>
        <Card className=" bg-gradient-to-r from-violet-300 to-violet-400   flex">
          <CardHeader className="text-primary-foreground w-full pt-6 font-semibold text-base ">
            <span>Dialog vs alert dialog</span> <VscSparkleFilled />
          </CardHeader>
          <CardContent className="">
            <div className="flex  items-center gap-2">
              <FaHandSparkles size={90} color="black" />
              <span className="  text-primary-foreground  font-semibold text-shadow-md md:text-lg">
                In shadcn/ui, a Dialog is a general-purpose modal used for
                forms, details, or non-critical interactions. An AlertDialog is
                used for critical actions (like delete) where the user must
                explicitly confirm or cancel before proceeding.
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Modal;
