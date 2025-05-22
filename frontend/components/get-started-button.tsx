"use client";

import Link from "next/link";

import { useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export const GetStartedButton = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <Button size="lg" className="opacity-50" asChild>
        <span>Get Started</span>
      </Button>
    );
  }

  const href = session ? "/dashboard" : "/login";

  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="lg" asChild>
        <Link href={href}>Get Started</Link>
      </Button>

      {session && (
        <p className="flex items-center gap-2">
          <span
            data-role={session.user.role}
            className="size-4 animate-pulse rounded-full data-[role=ADMIN]:bg-red-600 data-[role=USER]:bg-blue-600"
          />
          Welcome back, {session.user.name}! 👋
        </p>
      )}
    </div>
  );
};
