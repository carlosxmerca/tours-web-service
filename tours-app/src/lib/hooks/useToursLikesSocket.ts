import { useEffect } from "react";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { PaginatedTourResponse, Tour } from "@/lib/schemas/tour.schema";
import { io } from "socket.io-client";
import { SOCKET_ENDPOINT } from "@/infrastructure/sockets/socket";

export function useToursLikesSocket(limit: number) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const socket = io(SOCKET_ENDPOINT.likes, {
      transports: ["websocket"],
    });

    socket.on("tour-like-update", (payload) => {
      const { tourId, likes } = payload;

      if (tourId && typeof likes === "number") {
        console.log(`[Socket] Like update received: ${likes} likes`);

        queryClient.setQueryData<InfiniteData<PaginatedTourResponse>>(
          ["tours", limit],
          (oldData) => {
            if (!oldData) return oldData;

            return {
              ...oldData,
              pages: oldData.pages.map((page) => ({
                ...page,
                data: page.data.map((tour: Tour) =>
                  tour.id === tourId ? { ...tour, likes } : tour
                ),
              })),
            };
          }
        );
      }
    });

    return () => {
      console.log(`[Socket] Left tours`);
      socket.disconnect();
    };
  }, [queryClient, limit]);
}
