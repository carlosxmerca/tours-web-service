import { TourService } from "@/infrastructure/api/tours.service";
import { CreateTourDto } from "@/lib/schemas/createTour.schema";

export const findAllTours = TourService.findAll;
export const findTourById = TourService.findById;
export const createTour = (data: CreateTourDto) => TourService.create(data);
export const likeTour = (id: string) => TourService.like(id);
export const deleteTour = (id: string) => TourService.remove(id);
export const checkToursHealth = TourService.health;
