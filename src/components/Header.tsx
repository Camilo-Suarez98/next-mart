import Link from "next/link";
import Image from "next/image";
import { SignButton } from "./ui/atoms/SignButton";

export const Header = () => {
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
        <div className="flex gap-8">
          <SignButton link="#" text="Sign In" />
          <SignButton link="#" text="Sign Up" />
        </div>
      </nav>
    </header>
  );
};