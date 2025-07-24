import { PaginatiedDto } from "src/common/dto/paginated.dto";
import { PaginateDto } from "src/common/dto/paginate.dto";
import { Tour } from "../entities/tour";

export abstract class TourRepository {
  abstract findById(id: string): Promise<Tour | null>;
  abstract findAll(dto: PaginateDto): Promise<PaginatiedDto<Tour>>;
  abstract create(tour: Tour): Promise<Tour>;
  abstract update(tour: Tour): Promise<Tour>;
  abstract delete(id: string): Promise<void>;
  abstract like(id: string): Promise<void>;
}
