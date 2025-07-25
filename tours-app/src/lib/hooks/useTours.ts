import { findAllTours } from "@/use-cases/tours";
import { useQuery } from "@tanstack/react-query";

export function useTours(params?: { page?: number; limit?: number }) {
  return useQuery({
    queryKey: ["tours", params],
    queryFn: () => findAllTours(params),
  });
}
