import Separator from "@/components/atoms/Separator.tsx/Separator.tsx";
import TourCard from "@/components/molecules/TourCard/TourCard";
import { findTourById } from "@/use-cases/tours";

interface Props {
  params: { id: string };
}

export default async function TourPage({ params }: Props) {
  const tour = await findTourById(params.id);

  if (!tour) {
    return <p className="p-8 text-red-500">Tour no encontrado.</p>;
  }

  return (
    <>
      <div className="w-full h-full px-8 mb-16">
        <div className="w-full h-full p-12 bg-white rounded-lg">
          <TourCard tour={tour} displayOptions={false} />
        </div>
      </div>
      <Separator />
    </>
  );
}
