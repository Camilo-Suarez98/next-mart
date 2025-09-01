import Link from "next/link";

interface SignButtonProps {
  link: string;
  text: string;
}

export const SignButton = ({ link, text }: SignButtonProps) => {
  return (
    <Link href={link} className="border border-primary px-2 py-1 rounded-xl">{text}</Link>
  );
};
