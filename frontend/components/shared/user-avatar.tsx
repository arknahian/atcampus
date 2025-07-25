import { User } from "@prisma/client";
import { AvatarProps } from "@radix-ui/react-avatar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/shared/icons";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name" | "username">;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage
          alt="Picture"
          src={user.image || "/_static/avatars/shadcn.jpeg"}
          referrerPolicy="no-referrer"
        />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name || user.username}</span>
          <Icons.user className="size-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
