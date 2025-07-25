import { GoHeart, GoHeartFill } from "react-icons/go";

interface LikeIndicatorProps {
  likes: number;
  liked?: boolean;
  className?: string;
}

export default function LikeIndicator({
  likes,
  className,
  liked = false,
}: LikeIndicatorProps) {
  const Icon = liked ? GoHeartFill : GoHeart;

  return (
    <div className={`flex gap-1 items-center text-lg text-red-500 ${className}`}>
      <p>{likes}</p>
      <Icon className="w-5 h-5" />
    </div>
  );
}
