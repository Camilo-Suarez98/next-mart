import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="header sm:footer-horizontal bg-neutral text-neutral-content p-10 w-full">
      <nav>
        <Image src="/next-mart.png" alt="Next.js logo" width={180} height={100} />
        <Link href="/about" className="link link-hover">About</Link>
        <Link href="#" className="link link-hover">Contact</Link>
        <Link href="#" className="link link-hover">Marketing</Link>
        <Link href="#" className="link link-hover">Advertisement</Link>
      </nav>
      <nav>
        <h6 className="header-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="header-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </header>
  )
}