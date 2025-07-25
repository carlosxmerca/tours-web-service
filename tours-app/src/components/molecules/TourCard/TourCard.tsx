"use client";

import Button from "@/components/atoms/Button/Button";
import LikeIndicator from "@/components/atoms/LikeIndicator/LikeIndicator";
import LinkButton from "@/components/atoms/LinkButton/LinkButton";

interface TourCardProps {
  displayOptions?: boolean;
  className?: string;
}

export default function TourCard({
  className,
  displayOptions = true,
}: TourCardProps) {
  return (
    <div className={`w-full h-auto rounded-xl bg-white ${className}`}>
      <img
        src="/img/san_andres.png"
        className="w-full h-[14rem] object-cover rounded-t-xl"
        alt="Sitio turistico"
      />
      <div className="py-8 px-20 relative">
        <LikeIndicator
          likes={3}
          liked={true}
          className="absolute top-6 right-6"
        />
        <h2 className="font-bold text-4xl text-center">Ruinas de San Andrés</h2>
        <p className="text-2xl mt-6">
          El Parque Arqueológico Joya de Cerén es un ícono de la cultura
          prehispánica que te muestra cómo fue la vida cotidiana de los mayas.
        </p>
        <p className="text-xl mt-6">
          Ciudad Arce del departamento de La Libertad de El Salvador
        </p>
        {displayOptions && (
          <div className="flex flex-col gap-4 mt-6">
            <LinkButton href={"/tour?id=abc"} text="Ver más" variant="ghost" />
            <Button
              action={() => console.log("Eliminando")}
              text="Eliminar"
              variant="secondary"
            />
          </div>
        )}
      </div>
    </div>
  );
}
