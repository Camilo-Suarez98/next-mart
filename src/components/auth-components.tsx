import { signIn, signOut } from "@/auth";
import { LogOut } from "@deemlol/next-icons";

export function SignIn({
  provider,
  children,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<"button">) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
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
        "use server"
        await signOut()
      }}
      className="h-[30px]"
    >
      <button {...props}>{children || <LogOut size={24} />}</button>
    </form>
  )
}
