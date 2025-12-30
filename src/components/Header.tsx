import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { SignOut } from "./auth-components";
import { SignButton } from "./ui/atoms/SignButton";

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
              {session.user.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name ?? "User"}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <span>{session.user.name}</span>
              <SignOut className="btn btn-sm btn-ghost cursor-pointer" />
            </div>
          ) : (
            <SignButton
              href="/login"
              className="border border-primary px-2 py-1 rounded-xl cursor-pointer"
            >
              Sign In
            </SignButton>
          )}
        </div>
      </nav>
    </header>
  );
};