import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import {
  CreateTourDto,
  TourResponseDto,
  UpdateTourDto,
} from '../application/dto';
import { FindAllToursUseCase } from '../application/use-cases/find-all-tours.use-case';
import { FindTourByIdUseCase } from '../application/use-cases/find-tour-by-id.use-case';
import { PaginatiedDto } from 'src/common/dto/paginated.dto';
import { CreateTourUseCase } from '../application/use-cases/cerate-tour.use-case';
import { DeleteTourUseCase } from '../application/use-cases/delete-tour.use-case';
import { UpdateTourUseCase } from '../application/use-cases/update-tour.use-case';

@Controller('tours')
export class ToursController {
  constructor(
    private readonly findAllToursUseCase: FindAllToursUseCase,
    private readonly findTourByIdUseCase: FindTourByIdUseCase,
    private readonly createTourUseCase: CreateTourUseCase,
    private readonly updateTourUseCase: UpdateTourUseCase,
    private readonly deleteTourUseCase: DeleteTourUseCase,
  ) {}

  @Get()
  findAll(
    @Query() query: PaginateDto,
  ): Promise<PaginatiedDto<TourResponseDto>> {
    return this.findAllToursUseCase.execute(query);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.findTourByIdUseCase.execute(id);
  }

  @Post()
  create(@Body() dto: CreateTourDto): Promise<TourResponseDto> {
    return this.createTourUseCase.execute(dto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateTourDto,
  ): Promise<TourResponseDto> {
    return this.updateTourUseCase.execute(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.deleteTourUseCase.execute(id);
  }

  @Get('health')
  healthCheck(): { message: string } {
    return { message: 'Hello World!' };
  }
}
