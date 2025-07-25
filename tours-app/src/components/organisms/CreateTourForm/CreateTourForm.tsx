"use client";

import Button from "@/components/atoms/Button/Button";
import FormInput from "@/components/atoms/Form/FormInput/FormInput";
import FormTextarea from "@/components/atoms/Form/FormTextarea/FormTextarea";
import {
  CreateTourDto,
  CreateTourSchema,
} from "@/lib/schemas/createTour.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

export default function CreateTourForm() {
  const methods = useForm<CreateTourDto>({
    defaultValues: {
      name: "",
      address: "",
      description: "",
      image: "",
    },
    resolver: zodResolver(CreateTourSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: CreateTourDto) => {
    console.log("Submitting:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl w-full mx-auto flex flex-col gap-5 mt-10 px-4"
      >
        <h2 className="text-2xl font-bold text-center">
          Agregar destino turístico
        </h2>

        <FormInput name="name" label="Nombre:" type="text" />
        <FormInput name="address" label="Dirección:" type="text" />
        <FormTextarea name="description" label="Descripción:" />
        <FormInput name="image" label="Url imágen:" type="text" />

        <Button
          text="Agregar destino"
          type="submit"
          variant="primary"
          className="mt-12"
        />
      </form>
    </FormProvider>
  );
}
