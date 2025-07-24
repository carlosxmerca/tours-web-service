import { Injectable } from '@nestjs/common';
import { TourRepository } from '../../domain/repositories/tour.repository';
import { TourResponseDto } from '../dto/tour-response.dto';
import { CreateTourDto } from '../dto';
import { TourFactory } from 'src/tours/domain/factories/tour.factory';

@Injectable()
export class CreateTourUseCase {
  constructor(private readonly tourRepository: TourRepository) {}

  async execute(dto: CreateTourDto): Promise<TourResponseDto> {
    const tour = await this.tourRepository.create(TourFactory.create(dto));
    return new TourResponseDto(tour);
  }
}
