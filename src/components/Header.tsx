import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { SignOut } from "./auth-components";
import { SignButton } from "./ui/atoms/SignButton";
import { LogIn } from "@deemlol/next-icons";

export const Header = async () => {
  const session = await auth();

  return (
    <header className="header sm:footer-horizontal text-neutral-content p-6 w-full">
      <nav className="flex justify-between items-center flex-2">
        <Link href="/" className="link link-hover">
          <Image src="/next-mart.png" alt="Next.js logo" width={180} height={100} />
        </Link>
        <div className="flex gap-8">
          <Link href="#" className="link link-hover">Home</Link>
          <Link href="#" className="link link-hover">Shop</Link>
          <Link href="#" className="link link-hover">Categories</Link>
          <Link href="#" className="link link-hover">Contact</Link>
          <Link href="/about" className="link link-hover">About</Link>
          <Link href="#" className="link link-hover">Cart</Link>
        </div>
        <div className="flex gap-8 items-center">
          {session?.user ? (
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 justify-center items-center">
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name ?? "User"}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                )}
              </div>
              <SignOut className="cursor-pointer" />
            </div>
          ) : (
            <SignButton
              href="/login"
              className="border border-primary p-2 rounded-full cursor-pointer"
            >
              <LogIn size={24} />
            </SignButton>
          )}
        </div>
      </nav>
    </header>
  );
};