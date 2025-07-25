import { findTourById } from "@/use-cases/tours";
import { useQuery } from "@tanstack/react-query";

export function useTour(id: string) {
  return useQuery({
    queryKey: ["tour", id],
    queryFn: () => findTourById(id),
    enabled: !!id,
  });
}
