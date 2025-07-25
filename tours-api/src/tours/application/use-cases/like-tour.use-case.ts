import { Injectable, NotFoundException } from '@nestjs/common';
import { TourRepository } from '../../domain/repositories/tour.repository';
import { TourResponseDto } from '../dto/tour-response.dto';
import { Tour } from 'src/tours/domain/entities/tour';
import { TourGateway } from 'src/tours/infrastructure/gateways/tour.gateway';

@Injectable()
export class LikeTourUseCase {
  constructor(
    private readonly tourRepository: TourRepository,
    private readonly tourGateway: TourGateway,
  ) {}

  async execute(id: string): Promise<TourResponseDto> {
    const tour: Tour = await this.tourRepository.findById(id);
    if (!tour) throw new NotFoundException('Tour no encontrado');

    tour.like();

    await this.tourRepository.like(tour.id);
    this.tourGateway.emitLikeUpdate(tour.id, tour.likes);
    return tour;
  }
}
