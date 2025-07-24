import { createPaginatedDto } from "src/common/dto/paginated.dto";
import { Tour } from "src/tours/domain/entities/tour";

export const PaginatedTourDto = createPaginatedDto(Tour);
export type PaginatedTour = InstanceType<ReturnType<typeof createPaginatedDto<Tour>>>;
