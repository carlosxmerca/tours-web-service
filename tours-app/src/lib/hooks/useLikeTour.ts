import { likeTour } from "@/use-cases/tours";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLikedTours } from "../stores/useLikedTours";

export function useLikeTour(id: string) {
  const queryClient = useQueryClient();
  const likeTourLocally = useLikedTours((s) => s.likeTourLocally);

  return useMutation({
    mutationFn: () => likeTour(id),
    onSuccess: () => {
      likeTourLocally(id);
      // queryClient.invalidateQueries({ queryKey: ["tour", id] });
      // queryClient.invalidateQueries({ queryKey: ["tours"] }); // TODO: use another update method
    },
  });
}
