import { useInfiniteQuery } from "@tanstack/react-query";
import { findAllTours } from "@/use-cases/tours";

export function useInfiniteTours(limit = 10) {
  return useInfiniteQuery({
    queryKey: ["tours", limit],
    queryFn: ({ pageParam = 1 }) => findAllTours({ page: pageParam, limit }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (
        lastPage?.pageIndex &&
        lastPage?.totalPages &&
        lastPage.pageIndex < lastPage.totalPages
      ) {
        return lastPage.pageIndex + 1;
      }
      return undefined;
    },
  });
}
