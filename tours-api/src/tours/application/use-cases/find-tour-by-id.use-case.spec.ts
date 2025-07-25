import { NotFoundException } from '@nestjs/common';
import { FindTourByIdUseCase } from './find-tour-by-id.use-case';
import { TourRepository } from '../../domain/repositories/tour.repository';
import { Tour } from 'src/tours/domain/entities/tour';
import { TourResponseDto } from '../dto/tour-response.dto';

describe('FindTourByIdUseCase', () => {
  let useCase: FindTourByIdUseCase;
  let tourRepository: Partial<Record<keyof TourRepository, jest.Mock>>;

  beforeEach(() => {
    tourRepository = {
      findById: jest.fn(),
    };

    useCase = new FindTourByIdUseCase(tourRepository as any);
  });

  it('debe devolver TourResponseDto cuando el tour existe', async () => {
    const tourMock = new Tour(
      '656f3703-b505-49ff-b192-6c98edf5057f',
      'Tour de prueba',
      'Dirección',
      'Descripción',
      'http://image.jpg',
      5,
      new Date(),
      new Date(),
    );

    (tourRepository.findById as jest.Mock).mockResolvedValue(tourMock);

    const result = await useCase.execute(
      '656f3703-b505-49ff-b192-6c98edf5057f',
    );

    expect(tourRepository.findById).toHaveBeenCalledWith(
      '656f3703-b505-49ff-b192-6c98edf5057f',
    );
    expect(result).toBeInstanceOf(TourResponseDto);
    expect(result.name).toBe('Tour de prueba');
  });

  it('debe lanzar NotFoundException cuando no existe el tour', async () => {
    (tourRepository.findById as jest.Mock).mockResolvedValue(null);

    await expect(
      useCase.execute('656f3703-b505-49ff-b192-6c98edf5057f'),
    ).rejects.toThrow(NotFoundException);
    expect(tourRepository.findById).toHaveBeenCalledWith(
      '656f3703-b505-49ff-b192-6c98edf5057f',
    );
  });
});
