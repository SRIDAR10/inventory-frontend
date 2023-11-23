import React from "react";
import { LogOut } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/Avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { signOut, useSession } from "next-auth/react";

const SignoutPopover = () => {
  const { data: session, status } = useSession();
  return (
    <div className="cursor-pointer">
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src={session?.user?.image as string} />
            <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <button className="w-full" onClick={()=>signOut()}>
            <div className="flex gap-2 cursor-pointer">
              <LogOut color="#c52b2b" />
              <div className="text-red-600">Signout</div>
            </div>
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SignoutPopover;
