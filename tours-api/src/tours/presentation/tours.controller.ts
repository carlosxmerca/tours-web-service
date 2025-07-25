import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import {
  CreateTourDto,
  PaginatedTourResponse,
  PaginatedTourResponseDto,
  TourResponseDto,
  UpdateTourDto,
} from '../application/dto';
import { FindAllToursUseCase } from '../application/use-cases/find-all-tours.use-case';
import { FindTourByIdUseCase } from '../application/use-cases/find-tour-by-id.use-case';
import { CreateTourUseCase } from '../application/use-cases/cerate-tour.use-case';
import { DeleteTourUseCase } from '../application/use-cases/delete-tour.use-case';
import { UpdateTourUseCase } from '../application/use-cases/update-tour.use-case';
import { MessageDto } from 'src/common/dto/message.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { LikeTourUseCase } from '../application/use-cases/like-tour.use-case';

@Controller('tours')
export class ToursController {
  constructor(
    private readonly findAllToursUseCase: FindAllToursUseCase,
    private readonly findTourByIdUseCase: FindTourByIdUseCase,
    private readonly createTourUseCase: CreateTourUseCase,
    private readonly updateTourUseCase: UpdateTourUseCase,
    private readonly likeTourUseCase: LikeTourUseCase,
    private readonly deleteTourUseCase: DeleteTourUseCase,
  ) {}

  @Get()
  @ApiOkResponse({
    description: 'Tours disponibles',
    type: PaginatedTourResponseDto,
  })
  findAll(@Query() query: PaginateDto): Promise<PaginatedTourResponse> {
    return this.findAllToursUseCase.execute(query);
  }

  @Get('health')
  @ApiOkResponse({ description: 'Health check', type: MessageDto })
  healthCheck(): MessageDto {
    return { message: 'Hello World!' };
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Tour encontrado', type: TourResponseDto })
  findById(@Param('id', ParseUUIDPipe) id: string): Promise<TourResponseDto> {
    return this.findTourByIdUseCase.execute(id);
  }

  @Post()
  @ApiOkResponse({ description: 'Tour creado', type: TourResponseDto })
  create(@Body() dto: CreateTourDto): Promise<TourResponseDto> {
    return this.createTourUseCase.execute(dto);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Tour actualizado', type: TourResponseDto })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateTourDto,
  ): Promise<TourResponseDto> {
    return this.updateTourUseCase.execute(id, dto);
  }

  @Patch(':id/like')
  @ApiOkResponse({ description: 'Like registrado', type: TourResponseDto })
  giveLike(@Param('id', ParseUUIDPipe) id: string): Promise<TourResponseDto> {
    return this.likeTourUseCase.execute(id);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Tour eliminado', type: MessageDto })
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<MessageDto> {
    await this.deleteTourUseCase.execute(id);
    return { message: 'Recurso eliminado' };
  }
}
