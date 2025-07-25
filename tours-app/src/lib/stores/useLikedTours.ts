import { create } from "zustand";

type LikedToursStore = {
  likedTourIds: Set<string>;
  likeTourLocally: (id: string) => void;
  hasLiked: (id: string) => boolean;
};

export const useLikedTours = create<LikedToursStore>((set, get) => ({
  likedTourIds: new Set(),
  likeTourLocally: (id: string) => {
    const current = new Set(get().likedTourIds);
    current.add(id);
    set({ likedTourIds: current });
  },
  hasLiked: (id: string) => get().likedTourIds.has(id),
}));
