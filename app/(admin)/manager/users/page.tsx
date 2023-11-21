import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import {
  CheckIcon,
  ChevronLeftIcon,
  Loader2Icon,
  LockIcon,
  PencilIcon,
  PlusIcon,
  SaveIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import AvatarDefault from "@/images/user-1.jpg";
import { Textarea } from "@/components/ui/textarea";

const UserPage = () => {
  return (
    <div className="flex border rounded-md h-full overflow-hidden">
      <div className="border-r w-[220px] flex flex-col">
        <div className="flex items-center border-b p-2">
          <SearchIcon className="w-4 h-4 opacity-50" />
          <Input
            placeholder="Search name..."
            type="text"
            className="border-none focus-visible:ring-transparent ring-inset"
          />
        </div>

        <div className=" flex flex-col gap-1 p-1 pl-2 h-full overflow-y-scroll">
          <p className="w-full text-center text-sm p-2">No result found</p>

          <div
            className={cn(
              "flex items-center gap-1 p-2 rounded-md cursor-pointer",
              true ? "bg-accent" : "hover:bg-accent"
            )}
          >
            <CheckIcon
              className={cn(
                "h-4 w-4 flex flex-shrink-0",
                true ? "opacity-100" : "opacity-0"
              )}
            />
            <div className="overflow-hidden mr-auto">
              <p className="font-medium truncate">Thanh Nhut</p>
              <p className="text-xs truncate">gaconght@gmail.com</p>
            </div>
            <LockIcon
              className={cn(
                "h-4 w-4 flex flex-shrink-0",
                true ? "opacity-100" : "opacity-0"
              )}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex items-center p-2 border-b min-h-[57px]">
          <Button
            variant="ghost"
            className={cn("h-8 w-8 p-0 mr-2", false ? "" : "hidden")}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
          <h3 className="text-lg ">User Detail</h3>
          <div className="flex gap-1 ml-auto">
            <Button
              disabled={false}
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

            <AlertDialog>
              <Button variant="ghost" className="rounded-full w-10 h-10 p-2">
                <PlusIcon className="w-4 h-4" />
              </Button>
              <AlertDialogContent>
                <form>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Create new User</AlertDialogTitle>
                  </AlertDialogHeader>

                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        className={cn(
                          "focus-visible:ring-transparent",
                          false ? "border-red-500" : ""
                        )}
                        placeholder="Email"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="password">Password</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-background overflow-hidden text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <input
                          type={false ? "password" : "text"}
                          className="flex-grow outline-none bg-transparent placeholder:text-muted-foreground px-3 py-2"
                          id="password"
                          placeholder="Password"
                          name="password"
                        />
                        <button
                          className="flex flex-shrink-0 items-center px-2"
                          type="button"
                          tabIndex={-1}
                        >
                          {true ? (
                            <PiEyeClosedBold size={20} />
                          ) : (
                            <PiEyeBold size={20} />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Full name</Label>
                      <Input
                        id="username"
                        name="username"
                        className="focus-visible:ring-transparent "
                        placeholder="Full name"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Role</Label>
                      <Select>
                        <SelectTrigger className="focus-visible:ring-transparent">
                          <SelectValue placeholder="Select a role to display" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="true">Enable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Status</Label>
                      <Select>
                        <SelectTrigger className="focus-visible:ring-transparent">
                          <SelectValue placeholder="Select a active to display" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="true">Enable</SelectItem>
                          <SelectItem value="false">Disable</SelectItem>
                        </SelectContent>
                      </Select>
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

        <div className="p-6 text-center">No selected</div>

        <div className="grid grid-cols-2 gap-4 p-4 overflow-y-scroll">
          <div className="col-span-2 flex flex-col items-center justify-center gap-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={AvatarDefault.src} />
              <AvatarFallback className="bg-transparent">
                <Skeleton className="w-24 h-24 rounded-full" />
              </AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-4">
              <Button type="button" variant="outline">
                Reset
              </Button>

              <Label
                className="dark:text-secondary text-white bg-primary py-[13px] px-4 rounded-md cursor-pointer"
                htmlFor="avatar"
              >
                Edit
              </Label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                name="avatar"
                id="avatar"
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Label className="leading-snug text-muted-foreground">Name</Label>
            <Input
              type="text"
              name="username"
              className="focus-visible:ring-transparent"
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Label className="leading-snug text-muted-foreground">Active</Label>
            <Select>
              <SelectTrigger className="focus-visible:ring-transparent">
                <SelectValue placeholder="Select a active to display" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Enable</SelectItem>
                <SelectItem value="false">Disable</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Label className="leading-snug text-muted-foreground">Phone</Label>
            <Input
              name="phone"
              type="text"
              className="focus-visible:ring-transparent"
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Label className="leading-snug text-muted-foreground">Role</Label>
            <Select>
              <SelectTrigger className="focus-visible:ring-transparent">
                <SelectValue placeholder="Select a role to display" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Enable</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2 ">
            <Label className="leading-snug text-muted-foreground">
              Address
            </Label>
            <Input
              name="address"
              type="text"
              className="focus-visible:ring-transparent"
            />
          </div>
          <div className="col-span-2">
            <Label className="leading-snug text-muted-foreground">Bio</Label>
            <Textarea
              name="bio"
              maxLength={255}
              className="focus-visible:ring-transparent"
              placeholder="Tell us a little bit about yourself"
            />
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-4 p-4 overflow-y-scroll">
          <div className="flex items-center gap-4 col-span-2">
            <Avatar className="w-24 h-24">
              <AvatarImage src={AvatarDefault.src} />
              <AvatarFallback className="bg-transparent">
                <Skeleton className="w-24 h-24 rounded-full" />
              </AvatarFallback>
            </Avatar>
            <div className="w-full overflow-hidden">
              <p className="font-semibold tracking-tight text-2xl">
                Thanh Nhut
              </p>
              <p className="text-sm text-muted-foreground">Admin</p>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <p className="leading-snug text-muted-foreground">Email</p>
            <p className="font-medium">gaconght@gmail.com</p>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <p className="leading-snug text-muted-foreground">Phone</p>
            <p className="font-medium">N/A</p>
          </div>
          <div className="col-span-2">
            <p className="leading-snug text-muted-foreground">Address</p>
            <p className="font-medium">N/A</p>
          </div>
          <div className="col-span-2">
            <p className="leading-snug text-muted-foreground">Bio</p>
            <p className="font-medium">N/A</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
