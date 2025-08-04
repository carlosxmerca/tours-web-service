import { Injectable } from '@nestjs/common';
import { TourResponseDto } from '../dto/tour-response.dto';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import { TourRepository } from 'src/tours/domain/repositories/tour.repository';
import { PaginatedTour, PaginatedTourResponse } from '../dto';
import { WinstonLogger } from 'src/logger-module/winston-logger.service';

@Injectable()
export class FindAllToursUseCase {
  constructor(
    private readonly logger: WinstonLogger,
    private readonly tourRepository: TourRepository,
  ) {}

  async execute(dto: PaginateDto): Promise<PaginatedTourResponse> {
    this.logger.log(`Obteniendo tours...`);
    const tours: PaginatedTour = await this.tourRepository.findAll(dto);
    return {
      data: tours.data.map((tour) => new TourResponseDto(tour)),
      ...tours,
    };
  }
}
