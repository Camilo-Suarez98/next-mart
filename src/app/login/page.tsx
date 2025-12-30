import { SignIn } from "@/components/auth-components";
import { FaGoogle } from "react-icons/fa";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 mt-10 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col gap-4">
            <SignIn
              provider="google"
              className="border border-primary px-2 py-1 rounded-xl w-full text-lg flex justify-center place-items-center gap-2 cursor-pointer"
            >
              Sign in with Google
              <FaGoogle size={18} />
            </SignIn>
          </div>
        </div>
      </div>
    </div>
  )
}
