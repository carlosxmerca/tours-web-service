import Image from "next/image";

export default function Separator() {
  return (
    <Image
      src="/img/separator.png"
      alt="Separador"
      width={1920}
      height={77}
      className="w-full h-[4.8rem] object-cover"
    />
  );
}
