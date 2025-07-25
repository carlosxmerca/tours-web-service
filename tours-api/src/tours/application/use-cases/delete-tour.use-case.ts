import { Injectable, NotFoundException } from '@nestjs/common';
import { TourRepository } from '../../domain/repositories/tour.repository';
import { Tour } from 'src/tours/domain/entities/tour';

@Injectable()
export class DeleteTourUseCase {
  constructor(private readonly tourRepository: TourRepository) {}

  async execute(id: string): Promise<void> {
    const tour: Tour = await this.tourRepository.findById(id);
    if (!tour) throw new NotFoundException('Tour no encontrado');

    await this.tourRepository.delete(id);
  }
}
