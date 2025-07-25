import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export function useTourLikeSocket(tourId: string, initialLikes: number) {
  const [likes, setLikes] = useState(initialLikes);

  useEffect(() => {
    const socket = io(`${process.env.NEXT_PUBLIC_API_URL}/likes`, {
      transports: ["websocket"],
    });

    socket.emit("join-tour-room", tourId);

    socket.on("tour-like-update", (payload) => {
      if (payload.tourId === tourId) {
        console.log(`[Socket] Like update received: ${payload.likes} likes`);
        setLikes(payload.likes);
      }
    });

    return () => {
      socket.emit("leave-tour-room", tourId);
      console.log(`[Socket] Left tour room: ${tourId}`);
      socket.disconnect();
    };
  }, [tourId]);

  return likes;
}
