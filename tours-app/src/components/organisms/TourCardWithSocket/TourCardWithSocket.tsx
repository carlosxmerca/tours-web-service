"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import TourCard from "@/components/molecules/TourCard/TourCard";
import { Tour } from "@/lib/schemas/tour.schema";

interface Props {
  tour: Tour;
}

export default function TourCardWithSocket({ tour }: Props) {
  const [likes, setLikes] = useState(tour.likes);

  useEffect(() => {
    const socket = io(`${process.env.NEXT_PUBLIC_API_URL}/likes`, {
      transports: ["websocket"],
    });

    socket.emit("join-tour-room", tour.id);

    socket.on("tour-like-update", (payload) => {
      if (payload.tourId === tour.id) {
        console.log(`[Socket] Like update received: ${payload.likes} likes`);
        setLikes(payload.likes);
      }
    });

    return () => {
      socket.emit("leave-tour-room", tour.id);
      console.log(`[Socket] Left tour room: ${tour.id}`);
      socket.disconnect();
    };
  }, [tour.id]);

  return <TourCard tour={{ ...tour, likes }} displayOptions={false} />;
}
