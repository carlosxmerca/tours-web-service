import Separator from "@/components/atoms/Separator.tsx/Separator.tsx";
import TourCard from "@/components/molecules/TourCard/TourCard";

export default function TourPage() {
  return (
    <>
      <div className="w-full h-full px-8 mb-16">
        <div className="w-full h-full p-12 bg-white rounded-lg">
          <TourCard displayOptions={false} />
        </div>
      </div>
      <Separator />
    </>
  );
}
