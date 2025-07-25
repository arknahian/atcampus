import { Suspense } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/forms/user-register-form";
import BlurImage from "@/components/shared/blur-image";
import { Icons } from "@/components/shared/icons";

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
};

export default function RegisterPage() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "absolute top-4 right-4 md:top-8 md:right-8",
        )}
      >
        Login
        <Icons.chevronRight className="mr-2 h-4 w-4" />
      </Link>
      <div className="bg-muted hidden h-full flex-col place-items-center items-center justify-center gap-2 lg:flex">
        <BlurImage
          src="/_static/logo1.png"
          height={100}
          width={100}
          alt="logo"
          className="place-items-center justify-center"
        />
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-muted-foreground text-sm">
          Enter your email below to create your account
        </p>
        <p className="text-muted-foreground px-8 text-center text-sm">
          By clicking continue, you agree to our <br />
          <Link
            href="/terms"
            className="hover:text-brand underline underline-offset-4"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="hover:text-brand underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
      <div className="lg:p-6">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[40rem]">
          <Suspense>
            <UserAuthForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
