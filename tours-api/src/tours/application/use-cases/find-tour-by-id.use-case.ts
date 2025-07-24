import { Injectable, NotFoundException } from '@nestjs/common';
import { TourRepository } from '../../domain/repositories/tour.repository';
import { TourResponseDto } from '../dto/tour-response.dto';
import { Tour } from 'src/tours/domain/entities/tour';

@Injectable()
export class FindTourByIdUseCase {
  constructor(private readonly tourRepository: TourRepository) {}

  async execute(id: string): Promise<TourResponseDto> {
    const tour: Tour = await this.tourRepository.findById(id);
    if (!tour) throw new NotFoundException('Tour no encontrado');
    return new TourResponseDto(tour);
  }
}
