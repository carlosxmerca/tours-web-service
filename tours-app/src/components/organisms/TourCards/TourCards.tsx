import TourCard from "@/components/molecules/TourCard/TourCard";

export default function TourCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <TourCard className="shadow-md" />
      <TourCard className="shadow-md" />
      <TourCard className="shadow-md" />
    </div>
  );
}
