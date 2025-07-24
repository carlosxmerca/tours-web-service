import { Injectable, NotFoundException } from '@nestjs/common';
import { TourRepository } from '../../domain/repositories/tour.repository';
import { TourResponseDto } from '../dto/tour-response.dto';

@Injectable()
export class FindTourByIdUseCase {
  constructor(private readonly tourRepository: TourRepository) {}

  async execute(id: string): Promise<TourResponseDto> {
    const tour = await this.tourRepository.findById(id);
    if (!tour) throw new NotFoundException('Tour no encontrado');
    return new TourResponseDto(tour);
  }
}
