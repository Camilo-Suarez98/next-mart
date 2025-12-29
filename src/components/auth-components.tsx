import { signIn, signOut } from "@/auth"

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
    >
      <button {...props}>{children || "Sign Out"}</button>
    </form>
  )
}
