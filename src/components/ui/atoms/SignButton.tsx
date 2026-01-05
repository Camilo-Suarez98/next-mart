import Link from "next/link";

interface SignButtonProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const SignButton = ({ href, className, children, onClick }: SignButtonProps) => {
  return (
    <Link href={href} className={className} onClick={onClick}>{children}</Link>
  );
};
