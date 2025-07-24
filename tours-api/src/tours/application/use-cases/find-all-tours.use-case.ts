import { Injectable } from '@nestjs/common';
import { TourResponseDto } from '../dto/tour-response.dto';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import { TourRepository } from 'src/tours/domain/repositories/tour.repository';
import { PaginatedTour, PaginatedTourResponse } from '../dto';

@Injectable()
export class FindAllToursUseCase {
  constructor(private readonly tourRepository: TourRepository) {}

  async execute(dto: PaginateDto): Promise<PaginatedTourResponse> {
    const tours: PaginatedTour = await this.tourRepository.findAll(dto);
    return {
      data: tours.data.map((tour) => new TourResponseDto(tour)),
      ...tours,
    };
  }
}
