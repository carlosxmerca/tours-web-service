import { Module } from '@nestjs/common';
import { ToursController } from './presentation/tours.controller';
import { CreateTourUseCase } from './application/use-cases/cerate-tour.use-case';
import { FindAllToursUseCase } from './application/use-cases/find-all-tours.use-case';
import { FindTourByIdUseCase } from './application/use-cases/find-tour-by-id.use-case';
import { TourRepository } from './domain/repositories/tour.repository';
import { PrismaTourRepository } from './infrastructure/persistance/prisma/prisma-tour.repository';
import { UpdateTourUseCase } from './application/use-cases/update-tour.use-case';
import { DeleteTourUseCase } from './application/use-cases/delete-tour.use-case';
import { LikeTourUseCase } from './application/use-cases/like-tour.use-case';
import { TourGateway } from './infrastructure/gateways/tour.gateway';

@Module({
  providers: [
    FindAllToursUseCase,
    FindTourByIdUseCase,
    CreateTourUseCase,
    UpdateTourUseCase,
    LikeTourUseCase,
    DeleteTourUseCase,
    TourGateway,
    {
      provide: TourRepository,
      useClass: PrismaTourRepository,
    },
  ],
  controllers: [ToursController],
})
export class ToursModule {}
