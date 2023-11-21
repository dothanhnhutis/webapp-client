import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  CheckIcon,
  Loader2Icon,
  LockIcon,
  PencilIcon,
  PlusIcon,
  SaveIcon,
  SearchIcon,
  TrashIcon,
  UnlockIcon,
} from "lucide-react";
import React from "react";

const TagsPage = () => {
  return (
    <div className="flex border rounded-md overflow-hidden h-full">
      <div className="border-r w-[220px] h-full flex flex-col">
        <div className="flex items-center border-b p-2">
          <SearchIcon className="w-4 h-4 opacity-50" />
          <Input
            placeholder="Search tag..."
            type="text"
            className="border-none focus-visible:ring-transparent ring-inset"
          />
        </div>
        <div className="flex flex-col gap-1 p-1 pl-2 h-full overflow-y-scroll">
          <p className="w-full text-center text-sm p-2">No result found</p>

          <div
            className={cn(
              "flex items-center gap-1 p-2 rounded-md",
              true ? "bg-accent" : "hover:bg-accent"
            )}
          >
            <CheckIcon
              className={cn(
                "h-4 w-4 flex flex-shrink-0",
                true ? "opacity-100" : "opacity-0"
              )}
            />
            <div className="overflow-hidden">
              <p className="font-medium truncate">Lam dep</p>
              <p className="text-xs truncate">lam-dep</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex items-center p-2 border-b min-h-[57px]">
          <h3 className="text-lg">Tag Detail</h3>
          <div className="flex gap-1 ml-auto">
            <Button
              variant="ghost"
              className={cn("rounded-full w-10 h-10 p-2", true ? "" : "hidden")}
            >
              {true ? (
                true ? (
                  <Loader2Icon className="w-4 h-4 animate-spin" />
                ) : (
                  <SaveIcon className="w-4 h-4" />
                )
              ) : (
                <PencilIcon className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              className={cn("rounded-full w-10 h-10 p-2", true ? "" : "hidden")}
            >
              <TrashIcon className="w-4 h-4" />
            </Button>

            <AlertDialog>
              <Button variant="ghost" className="rounded-full w-10 h-10 p-2">
                <PlusIcon className="w-4 h-4" />
              </Button>
              <AlertDialogContent>
                <form>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Create new tag</AlertDialogTitle>
                  </AlertDialogHeader>

                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="tagName">Tag name</Label>
                      <Input
                        id="tagName"
                        name="tagName"
                        className="focus-visible:ring-transparent "
                        placeholder="Tag name"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="slug">Slug</Label>
                      <div className="flex gap-2">
                        <Input
                          id="slug"
                          name="slug"
                          className={cn(
                            "focus-visible:ring-transparent",
                            false ? "border-red-400" : ""
                          )}
                          placeholder="Slug"
                        />
                        <Button type="button" variant="secondary">
                          {true ? (
                            <UnlockIcon className="w-4 h-4" />
                          ) : (
                            <LockIcon className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <AlertDialogFooter className="mt-4">
                    <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
                    <AlertDialogAction type="submit">Create</AlertDialogAction>
                  </AlertDialogFooter>
                </form>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="tagName">Tag name</Label>
              <Input
                id="tagName"
                name="tagName"
                className="focus-visible:ring-transparent "
                placeholder="Tag name"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="slug">Slug</Label>
              <div className="flex gap-2">
                <Input
                  id="slug"
                  name="slug"
                  className={cn(
                    "focus-visible:ring-transparent",
                    false ? "border-red-400" : ""
                  )}
                  placeholder="Slug"
                />
                <Button type="button" variant="secondary">
                  {true ? (
                    <UnlockIcon className="w-4 h-4" />
                  ) : (
                    <LockIcon className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </>

          <>
            <div>
              <p className="text-sm font-medium text-muted-foreground">ID:</p>
              <p className="text-muted-foreground">2313213213</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">NAME:</p>
              <p className="text-muted-foreground">Lam dep</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">SLUG</p>
              <p className="text-muted-foreground">lam dep</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">POST</p>
              <p className="text-muted-foreground">0</p>
            </div>
          </>

          <div className="p-2 text-center">No selected</div>
        </div>
      </div>
    </div>
  );
};

export default TagsPage;
