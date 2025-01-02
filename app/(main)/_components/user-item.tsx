"use client";

import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronsLeftRight } from "lucide-react";

export const UserDropdownMenu = () => {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center p-3 hover:bg-primary/5 rounded-md">
          <Avatar className="h-6 w-6">
            <AvatarImage src={user?.imageUrl} />
          </Avatar>
          <span className="ml-2 text-sm font-medium truncate">
            {user?.fullName || "User"}
          </span>
          <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64 p-4 bg-white rounded-md shadow-md"
        align="end"
        alignOffset={8}
      >
        {/* User Info */}
        <div className="flex flex-col space-y-2">
          <p className="text-xs text-muted-foreground">
            {user?.emailAddresses[0]?.emailAddress || "Email not available"}
          </p>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium truncate">
                {user?.fullName || "Full Name"}
              </span>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator className="my-2" />
        {/* Additional Actions */}
        <DropdownMenuItem asChild>
          <SignOutButton>
            <button className="w-full text-left text-sm">Log Out</button>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownMenu;
