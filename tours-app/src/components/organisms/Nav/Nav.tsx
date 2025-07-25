import LinkButton from "@/components/atoms/LinkButton/LinkButton";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-4 px-4 sm:px-8 md:px-12 py-6">
      <Link href={"/"}>
        <img
          src="/img/el_salvador_banner.png"
          className="h-12 sm:h-16 object-contain"
          alt="El Salvador"
        />
      </Link>
      <div className="w-full sm:w-auto flex justify-center sm:justify-end">
        <LinkButton
          href="/create-tour"
          text="Agregar destino"
          className="w-full sm:w-auto xl:w-[21rem] px-6 py-3"
          variant="primary"
        />
      </div>
    </nav>
  );
}
