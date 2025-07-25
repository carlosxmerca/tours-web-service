import { likeTour } from "@/use-cases/tours";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLikeTour(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => likeTour(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tour", id] });
      queryClient.invalidateQueries({ queryKey: ["tours"] });
    },
  });
}
