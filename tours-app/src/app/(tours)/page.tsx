import Banner from "@/components/atoms/Banner/Banner";
import Separator from "@/components/atoms/Separator.tsx/Separator.tsx";
import TourCards from "@/components/organisms/TourCards/TourCards";

export default function Home() {
  return (
    <>
      <Banner />
      <Separator />
      <div className="w-full h-auto py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[14rem]">
        <TourCards />
      </div>
    </>
  );
}
