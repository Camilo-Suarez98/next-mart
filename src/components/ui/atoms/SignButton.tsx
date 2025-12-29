import Link from "next/link";

interface SignButtonProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

export const SignButton = ({ href, className, children }: SignButtonProps) => {
  return (
    <Link href={href} className={className}>{children}</Link>
  );
};
