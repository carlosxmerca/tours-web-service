import { deleteTour } from "@/use-cases/tours";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTour() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteTour(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tours"] });
    },
  });
}
