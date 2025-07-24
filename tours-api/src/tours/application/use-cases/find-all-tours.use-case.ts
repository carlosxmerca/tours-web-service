import { Injectable } from '@nestjs/common';
import { TourResponseDto } from '../dto/tour-response.dto';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import { PaginatiedDto } from 'src/common/dto/paginated.dto';
import { Tour } from 'src/tours/domain/entities/tour';
import { TourRepository } from 'src/tours/domain/repositories/tour.repository';


@Injectable()
export class FindAllToursUseCase {
  constructor(private readonly tourRepository: TourRepository) {}

  async execute(dto: PaginateDto): Promise<PaginatiedDto<TourResponseDto>> {
    const tours: PaginatiedDto<Tour> = await this.tourRepository.findAll(dto);
    return {
      data: tours.data.map((tour) => new TourResponseDto(tour)),
      ...tours,
    };
  }
}
