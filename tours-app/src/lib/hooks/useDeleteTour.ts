import { deleteTour } from "@/use-cases/tours";
import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { PaginatedTourResponse, Tour } from "@/lib/schemas/tour.schema";

export function useDeleteTour() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTour(id),
    onSuccess: (_data, deletedId) => {
      queryClient.setQueryData<InfiniteData<PaginatedTourResponse>>(
        ["tours", 3],
        (oldData) => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            pages: oldData.pages.map((page) => ({
              ...page,
              data: page.data.filter((tour: Tour) => tour.id !== deletedId),
            })),
          };
        }
      );
    },
  });
}
