"use client";

import Link from "next/link";
import Image from "next/image";
import { LogIn, Menu } from "@deemlol/next-icons";
import { useOpenMobileMenu } from "@/app/hooks/useOpenMobileMenu";
import { SignOut } from "./auth-components";
import { SignButton } from "./ui/atoms/SignButton";
import { Session } from "next-auth";

interface MobileMenuProps {
  session: Session | null;
}

export const MobileMenu = ({ session }: MobileMenuProps) => {
  const { openMobile, toggleMobileMenu } = useOpenMobileMenu();

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "#" },
    { name: "Categories", href: "#" },
    { name: "About", href: "/about" },
    { name: "Cart", href: "#" },
  ];

  return (
    <div className="flex justify-center items-center md:hidden">
      <div className="flex gap-3 items-center">
        {session?.user?.image && (
          <Image
            src={session.user.image}
            alt={session.user.name ?? "User"}
            width={24}
            height={24}
            className="rounded-full"
          />
        )}
      </div>
      <button onClick={toggleMobileMenu} className="p-2">
        <Menu size={24} />
      </button>

      {openMobile && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-6 z-50 text-center">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={toggleMobileMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex justify-between items-center">
            {session?.user ? (
              <div className="flex w-full justify-center items-center gap-4">
                <SignOut
                  className="cursor-pointer"
                />
              </div>
            ) : (
              <SignButton
                href="/login"
                className="flex items-center gap-2 border border-primary px-4 py-2 rounded-full cursor-pointer w-full justify-center"
                onClick={toggleMobileMenu}
              >
                <span>Sign In</span>
                <LogIn size={20} />
              </SignButton>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
