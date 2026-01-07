import Link from "next/link";
import Image from "next/image";
import { SignOut } from "./auth-components";
import { SignButton } from "./ui/atoms/SignButton";
import { LogIn } from "@deemlol/next-icons";
import { auth } from "@/auth";
import { MobileMenu } from "./MobileMenu";

export const Header = async () => {
  const session = await auth();

  return (
    <header className="header sm:footer-horizontal text-neutral-content pb-10 w-full">
      <nav className="flex justify-between items-center">
        <Link href="/" className="link link-hover">
          <Image
            src="/next-mart.png"
            alt="Next.js logo"
            className="w-36 md:w-48"
            width={180}
            height={100}
          />
        </Link>

        <div className="flex justify-between items-center gap-12">
          <div className="gap-8 hidden md:flex">
            <Link href="/" className="link link-hover">Home</Link>
            <Link href="#" className="link link-hover">Shop</Link>
            <Link href="#" className="link link-hover">Categories</Link>
            <Link href="/about" className="link link-hover">About</Link>
            <Link href="#" className="link link-hover">Cart</Link>
          </div>
          <div className="gap-8 items-center hidden md:flex">
            {session?.user ? (
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 justify-center items-center">
                  {session?.user.image && (
                    <Image
                      src={session?.user.image}
                      alt={session?.user.name ?? "User"}
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
          <MobileMenu session={session} />
        </div>
      </nav>
    </header>
  );
};