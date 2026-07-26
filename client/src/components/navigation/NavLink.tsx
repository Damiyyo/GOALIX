import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="
        text-sm text-zinc-300 transition-colors duration-300
        hover:text-white
      "
    >
      {label}
    </Link>
  );
};

export default NavLink;