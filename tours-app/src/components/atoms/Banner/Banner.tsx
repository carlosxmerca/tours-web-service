import Image from "next/image";

export default function Banner() {
  return (
    <Image
      src="/img/main-banner.png"
      alt="Centro Historico"
      width={1920}
      height={800}
      className="w-full h-[50rem] object-cover"
      priority
    />
  );
}
