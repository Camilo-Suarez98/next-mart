import { SignIn } from "@/components/auth-components";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 mt-10 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col gap-4">
            <SignIn
              provider="google"
              className="btn btn-primary w-full text-lg flex justify-center align-center gap-2"
            >
              Sign in with Google
              <FaGoogle />
            </SignIn>
          </div>
        </div>
      </div>
    </div>
  )
}
