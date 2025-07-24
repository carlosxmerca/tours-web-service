import { Tour } from 'src/tours/domain/entities/tour';

export class TourResponseDto {
  id: string;
  name: string;
  address: string;
  description?: string;
  image?: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(tour: Tour) {
    this.id = tour.id;
    this.name = tour.name;
    this.address = tour.address;
    this.description = tour.description;
    this.image = tour.image;
    this.likes = tour.likes;
    this.createdAt = tour.createdAt;
    this.updatedAt = tour.updatedAt;
  }
}
