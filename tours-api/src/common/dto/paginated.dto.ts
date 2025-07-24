import { Type } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export function createPaginatedDto<T>(ItemDto: Type<T>) {
  class PaginatedDto {
    @ApiProperty({ type: [ItemDto] })
    data: T[];

    @ApiProperty()
    total: number;

    @ApiProperty()
    pageIndex: number;

    @ApiProperty()
    pageSize: number;

    @ApiProperty()
    totalPages: number;

    constructor(partial: Partial<PaginatedDto>) {
      Object.assign(this, partial);
    }
  }

  return PaginatedDto;
}
