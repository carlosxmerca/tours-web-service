import { Tour } from 'src/tours/domain/entities/tour';
import { Tour as PrismaTour } from '@prisma/client';

export class TourMapper {
  static toEntity(record: PrismaTour): Tour {
    return new Tour(
      record.id,
      record.name,
      record.address,
      record.description,
      record.image,
      record.likes,
      record.createdAt,
      record.updatedAt,
    );
  }

  static toPersistence(tour: Tour): PrismaTour {
    return {
      id: tour.id,
      name: tour.name,
      address: tour.address,
      description: tour.description,
      image: tour.image,
      likes: tour.likes,
      createdAt: tour.createdAt,
      updatedAt: tour.updatedAt,
    };
  }
}
