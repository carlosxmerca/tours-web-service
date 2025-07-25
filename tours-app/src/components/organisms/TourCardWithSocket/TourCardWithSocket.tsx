"use client";

import TourCard from "@/components/molecules/TourCard/TourCard";
import { Tour } from "@/lib/schemas/tour.schema";
import { useTourLikeSocket } from "@/lib/hooks/useTourLikeSocket";

interface Props {
  tour: Tour;
}

export default function TourCardWithSocket({ tour }: Props) {
  const likes = useTourLikeSocket(tour.id, tour.likes);

  return <TourCard tour={{ ...tour, likes }} displayOptions={false} />;
}
