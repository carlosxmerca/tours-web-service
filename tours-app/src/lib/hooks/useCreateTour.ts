import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTourDto } from "../schemas/createTour.schema";
import { createTour } from "@/use-cases/tours";

export function useCreateTour() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateTourDto) => createTour(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tours"] });
    },
  });
}
