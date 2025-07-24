"use client";

import { useState } from "react";
import { deleteUserAction } from "@/actions/delete-user.action";
import { TrashIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

interface DeleteUserButtonProps {
  userId: string;
}

export const DeleteUserButton = ({ userId }: DeleteUserButtonProps) => {
  const [isPending, setIsPending] = useState(false);

  async function handleClick() {
    setIsPending(true);
    const res = await deleteUserAction({ userId });

    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("User deleted successfully");
    }
    setIsPending(false);
  }

  return (
    <Button
      size="icon"
      type="submit"
      variant="destructive"
      className="size-7 rounded-sm"
      onClick={handleClick}
      disabled={isPending}
    >
      <span className="sr-only">Delete User</span>
      <TrashIcon />
    </Button>
  );
};

export const PlaceholderDeleteUserButton = () => {
  return (
    <Button
      size="icon"
      variant="destructive"
      className="size-7 rounded-sm"
      disabled
    >
      <span className="sr-only">Delete User</span>
      <TrashIcon />
    </Button>
  );
};
