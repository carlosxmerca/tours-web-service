import { ApiProperty } from '@nestjs/swagger';
import { Tour } from 'src/tours/domain/entities/tour';

export class TourResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  likes: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
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
