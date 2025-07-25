import { Injectable, NotFoundException } from '@nestjs/common';
import { TourRepository } from '../../domain/repositories/tour.repository';
import { TourResponseDto } from '../dto/tour-response.dto';
import { UpdateTourDto } from '../dto';
import { Tour } from 'src/tours/domain/entities/tour';

@Injectable()
export class UpdateTourUseCase {
  constructor(private readonly tourRepository: TourRepository) {}

  async execute(id: string, dto: UpdateTourDto): Promise<TourResponseDto> {
    const tour: Tour = await this.tourRepository.findById(id);
    if (!tour) throw new NotFoundException('Tour no encontrado');

    tour.updateDetails(dto);

    const updated = await this.tourRepository.update(tour);
    return new TourResponseDto(updated);
  }
}
