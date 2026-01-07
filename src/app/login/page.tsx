import { SignIn } from "@/components/auth-components";
import { Google } from "@deemlol/next-icons";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center bg-base-200">
      <div className="w-full bg-base-100 p-6">
        <h1 className="text-2xl font-bold text-center md:text-4xl">Sign in with Google</h1>
        <div className="m-auto mt-12 sm:w-auto">
          <div className="flex flex-col gap-4">
            <SignIn
              provider="google"
              className="border border-primary px-2 py-1 rounded-xl m-auto text-lg flex justify-center place-items-center gap-1 cursor-pointer md:text-xl md:px-4 md:py-2"
            >
              Sign in with Google
              <Google size={18} />
            </SignIn>
          </div>
        </div>
      </div>
    </div>
  )
}
