
import { PaginateDto } from "src/common/dto/paginate.dto";
import { Tour } from "../entities/tour";
import { PaginatedTour } from "src/tours/application/dto";

export abstract class TourRepository {
  abstract findById(id: string): Promise<Tour | null>;
  abstract findAll(dto: PaginateDto): Promise<PaginatedTour>;
  abstract create(tour: Tour): Promise<Tour>;
  abstract update(tour: Tour): Promise<Tour>;
  abstract delete(id: string): Promise<void>;
  abstract like(id: string): Promise<void>;
}
