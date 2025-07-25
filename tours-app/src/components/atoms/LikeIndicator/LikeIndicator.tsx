import { useLikeTour } from "@/lib/hooks/useLikeTour";
import { useLikedTours } from "@/lib/stores/useLikedTours";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface LikeIndicatorProps {
  likes: number;
  tourId: string;
  className?: string;
}

export default function LikeIndicator({
  likes,
  tourId,
  className,
}: LikeIndicatorProps) {
  const { mutate } = useLikeTour(tourId);
  const isLiked = useLikedTours((s) => s.hasLiked(tourId));

  const Icon = isLiked ? GoHeartFill : GoHeart;

  return (
    <div
      onClick={() => {
        if (!isLiked) mutate();
      }}
      className={`flex gap-1 items-center text-lg text-red-500 cursor-pointer ${className}`}
    >
      <p>{likes}</p>
      <Icon className="w-5 h-5" />
    </div>
  );
}
