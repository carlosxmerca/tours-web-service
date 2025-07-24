import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Tour } from 'src/tours/domain/entities/tour';
import { TourRepository } from 'src/tours/domain/repositories/tour.repository';
import { TourMapper } from '../mappers/tour.mapper';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import { PaginatedTour, PaginatedTourDto } from 'src/tours/application/dto';

@Injectable()
export class PrismaTourRepository extends TourRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async findById(id: string): Promise<Tour | null> {
    const record = await this.prisma.tour.findUnique({ where: { id } });
    return record ? TourMapper.toEntity(record) : null;
  }

  async findAll(dto: PaginateDto): Promise<PaginatedTour> {
    const page = dto.page ?? 1;
    const limit = dto.limit ?? 10;

    const skip = (page - 1) * limit;

    const total = await this.prisma.tour.count();

    const records = await this.prisma.tour.findMany({
      skip,
      take: limit,
    });

    const entities = records.map(TourMapper.toEntity);

    const totalPages = Math.ceil(total / limit);

    return new PaginatedTourDto({
      data: entities,
      total,
      pageIndex: page,
      pageSize: limit,
      totalPages,
    });
  }

  async create(tour: Tour): Promise<Tour> {
    const data = TourMapper.toPersistence(tour);
    const record = await this.prisma.tour.create({ data });
    return TourMapper.toEntity(record);
  }

  async update(tour: Tour): Promise<Tour> {
    const data = TourMapper.toPersistence(tour);
    const record = await this.prisma.tour.update({
      where: { id: tour.id },
      data,
    });
    return TourMapper.toEntity(record);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.tour.delete({ where: { id } });
  }

  async like(id: string): Promise<void> {
    await this.prisma.tour.update({
      where: { id },
      data: {
        likes: {
          increment: 1,
        },
        updatedAt: new Date(),
      },
    });
  }
}
