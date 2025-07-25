import { createPaginatedDto } from 'src/common/dto/paginated.dto';
import { TourResponseDto } from './tour-response.dto';

export const PaginatedTourResponseDto = createPaginatedDto(TourResponseDto);
export type PaginatedTourResponse = InstanceType<
  ReturnType<typeof createPaginatedDto<TourResponseDto>>
>;
