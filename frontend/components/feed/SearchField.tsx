"use client";

import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function SearchField() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <form onSubmit={handleSubmit} method="GET" action="/search">
      <div className="relative max-md:w-full">
        <Input name="q" placeholder="Search" className="pe-10" />
        <SearchIcon className="text-muted-foreground absolute top-1/2 right-3 size-5 -translate-y-1/2 transform" />
      </div>
    </form>
  );
}
