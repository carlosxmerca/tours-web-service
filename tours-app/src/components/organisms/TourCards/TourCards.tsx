"use client";

import Button from "@/components/atoms/Button/Button";
import TourCard from "@/components/molecules/TourCard/TourCard";
import { useDeleteTour } from "@/lib/hooks/useDeleteTour";
import { useInfiniteTours } from "@/lib/hooks/useTours";
import { useToursLikesSocket } from "@/lib/hooks/useToursLikesSocket";
import { Tour } from "@/lib/schemas/tour.schema";

export default function TourCards() {
  const limit = 3;
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isLoading,
    error,
  } = useInfiniteTours(3);
  const deleteTourMutation = useDeleteTour();

  useToursLikesSocket(limit);

  if (status === "error") return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {data?.pages.map((page) =>
          page.data.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              className="shadow-md"
              maxDescriptionLength={200}
              deleteTour={(tour: Tour) => deleteTourMutation.mutate(tour.id)}
            />
          ))
        )}
      </div>

      {hasNextPage && (
        <div className="w-full flex justify-center mt-8">
          <Button
            action={() => fetchNextPage()}
            text={isFetchingNextPage ? "Cargando más..." : "Cargar más"}
            variant="secondary"
          />
        </div>
      )}
      {isLoading && <p className="w-full text-center">Cargando...</p>}
    </>
  );
}
