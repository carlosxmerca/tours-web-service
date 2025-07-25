import Separator from "@/components/atoms/Separator.tsx/Separator.tsx";
import CreateTourForm from "@/components/organisms/CreateTourForm/CreateTourForm";

export default function CreateTourPage() {
  return (
    <>
      <div className="w-full h-full px-8 mb-16">
        <div className="w-full h-full p-12 bg-white rounded-lg">
          <CreateTourForm />
        </div>
      </div>
      <Separator />
    </>
  );
}
