import { likeTour } from "@/use-cases/tours";
import { useMutation } from "@tanstack/react-query";
import { useLikedTours } from "../stores/useLikedTours";

export function useLikeTour(id: string) {
  const likeTourLocally = useLikedTours((s) => s.likeTourLocally);

  return useMutation({
    mutationFn: () => likeTour(id),
    onSuccess: () => {
      likeTourLocally(id);
    },
  });
}
