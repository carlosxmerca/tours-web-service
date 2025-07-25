"use client";

import Button from "@/components/atoms/Button/Button";
import LikeIndicator from "@/components/atoms/LikeIndicator/LikeIndicator";
import LinkButton from "@/components/atoms/LinkButton/LinkButton";
import SafeImage from "@/components/atoms/SafeImage/SafeImage";
import { Tour } from "@/lib/schemas/tour.schema";

interface TourCardProps {
  tour: Tour;
  displayOptions?: boolean;
  className?: string;
  maxDescriptionLength?: number;
  deleteTour?: (tour: Tour) => void;
  imageSize?: "small" | "big";
}

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "…";
}

export default function TourCard({
  tour,
  className,
  maxDescriptionLength,
  deleteTour,
  displayOptions = true,
  imageSize = "small",
}: TourCardProps) {
  const descriptionToShow =
    maxDescriptionLength !== undefined
      ? truncateText(tour.description, maxDescriptionLength)
      : tour.description;

  return (
    <div className={`w-full h-auto rounded-xl bg-white ${className}`}>
      <SafeImage
        src={tour.image}
        className={`w-full object-cover rounded-t-xl ${
          imageSize == "small" ? "h-[14rem]" : "h-[34rem]"
        }`}
        alt="Sitio turistico"
      />
      <div className="py-8 px-20 relative">
        <LikeIndicator
          likes={tour.likes}
          tourId={tour.id}
          className="absolute top-6 right-6"
        />
        <h2 className="font-bold text-4xl text-center">{tour.name}</h2>
        <p className="text-2xl mt-6">{descriptionToShow}</p>
        <p className="text-xl mt-6">{tour.address}</p>
        {displayOptions && (
          <div className="flex flex-col gap-4 mt-6">
            <LinkButton
              href={`/tour/${tour.id}`}
              text="Ver más"
              variant="ghost"
            />
            <Button
              action={() => deleteTour?.(tour)}
              text="Eliminar"
              variant="secondary"
            />
          </div>
        )}
      </div>
    </div>
  );
}
