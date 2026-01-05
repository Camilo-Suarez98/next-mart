"use client";

import { LogOut } from "@deemlol/next-icons";
import { handleSignIn, handleSignOut } from "@/app/actions/auth-actions";

export function SignIn({
  provider,
  children,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<"button">) {
  return (
    <form
      action={async () => {
        await handleSignIn(provider)
      }}
    >
      <button {...props}>{children || "Sign In"}</button>
    </form>
  )
}

export function SignOut({
  children,
  ...props
}: React.ComponentPropsWithRef<"button">) {
  return (
    <form
      action={async () => {
        await handleSignOut()
      }}
      className="h-[30px]"
    >
      <button {...props}>{children || <LogOut size={24} />}</button>
    </form>
  )
}
