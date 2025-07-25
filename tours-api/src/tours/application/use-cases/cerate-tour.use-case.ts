import { Injectable } from '@nestjs/common';
import { TourRepository } from '../../domain/repositories/tour.repository';
import { TourResponseDto } from '../dto/tour-response.dto';
import { CreateTourDto } from '../dto';
import { TourFactory } from 'src/tours/domain/factories/tour.factory';
import { Tour } from 'src/tours/domain/entities/tour';

@Injectable()
export class CreateTourUseCase {
  constructor(private readonly tourRepository: TourRepository) {}

  async execute(dto: CreateTourDto): Promise<TourResponseDto> {
    const tour: Tour = await this.tourRepository.create(TourFactory.create(dto));
    return new TourResponseDto(tour);
  }
}
