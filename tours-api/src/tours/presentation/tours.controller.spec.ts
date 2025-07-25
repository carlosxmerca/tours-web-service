import { Test, TestingModule } from '@nestjs/testing';
import { ToursController } from './tours.controller';
import { FindAllToursUseCase } from '../application/use-cases/find-all-tours.use-case';
import { FindTourByIdUseCase } from '../application/use-cases/find-tour-by-id.use-case';
import { CreateTourUseCase } from '../application/use-cases/cerate-tour.use-case';
import { UpdateTourUseCase } from '../application/use-cases/update-tour.use-case';
import { LikeTourUseCase } from '../application/use-cases/like-tour.use-case';
import { DeleteTourUseCase } from '../application/use-cases/delete-tour.use-case';
import { MessageDto } from 'src/common/dto/message.dto';
import { CreateTourDto } from '../application/dto/create-tour.dto';

describe('ToursController', () => {
  let controller: ToursController;

  let findAllToursUseCase: FindAllToursUseCase;
  let findTourByIdUseCase: FindTourByIdUseCase;
  let createTourUseCase: CreateTourUseCase;
  let updateTourUseCase: UpdateTourUseCase;
  let likeTourUseCase: LikeTourUseCase;
  let deleteTourUseCase: DeleteTourUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToursController],
      providers: [
        { provide: FindAllToursUseCase, useValue: { execute: jest.fn() } },
        { provide: FindTourByIdUseCase, useValue: { execute: jest.fn() } },
        { provide: CreateTourUseCase, useValue: { execute: jest.fn() } },
        { provide: UpdateTourUseCase, useValue: { execute: jest.fn() } },
        { provide: LikeTourUseCase, useValue: { execute: jest.fn() } },
        { provide: DeleteTourUseCase, useValue: { execute: jest.fn() } },
      ],
    }).compile();

    controller = module.get<ToursController>(ToursController);
    findAllToursUseCase = module.get(FindAllToursUseCase);
    findTourByIdUseCase = module.get(FindTourByIdUseCase);
    createTourUseCase = module.get(CreateTourUseCase);
    updateTourUseCase = module.get(UpdateTourUseCase);
    likeTourUseCase = module.get(LikeTourUseCase);
    deleteTourUseCase = module.get(DeleteTourUseCase);
  });

  const mockId: string = '656f3703-b505-49ff-b192-6c98edf5057f';
  const mockDto: CreateTourDto = {
    name: 'Tour a las Ruinas de Tazumal',
    address: 'Chalchuapa, Santa Ana, El Salvador',
    description: 'Una experiencia guiada por las antiguas ruinas mayas de Tazumal.',
    image: 'https://example.com/images/tour-tazumal.jpg',
  };

  it('findAll → llama al caso de uso y devuelve la respuesta', async () => {
    const mockResult = { data: [], pageIndex: 1, totalPages: 1 };
    (findAllToursUseCase.execute as jest.Mock).mockResolvedValue(mockResult);

    const result = await controller.findAll({ page: 1, limit: 10 });
    expect(findAllToursUseCase.execute).toHaveBeenCalledWith({ page: 1, limit: 10 });
    expect(result).toBe(mockResult);
  });

  it('findById → llama al caso de uso y devuelve la respuesta', async () => {
    const mockTour = { id: mockId, name: 'Test Tour' };
    (findTourByIdUseCase.execute as jest.Mock).mockResolvedValue(mockTour);

    const result = await controller.findById(mockId);
    expect(findTourByIdUseCase.execute).toHaveBeenCalledWith(mockId);
    expect(result).toBe(mockTour);
  });

  it('create → llama al caso de uso y devuelve la respuesta', async () => {
    const mockTour = { id: 'abc', ...mockDto };
    (createTourUseCase.execute as jest.Mock).mockResolvedValue(mockTour);

    const result = await controller.create(mockDto);
    expect(createTourUseCase.execute).toHaveBeenCalledWith(mockDto);
    expect(result).toBe(mockTour);
  });

  it('update → llama al caso de uso y devuelve la respuesta', async () => {
    const updatedTour = { id: mockId, ...mockDto, name: 'Tour Editado' };
    (updateTourUseCase.execute as jest.Mock).mockResolvedValue(updatedTour);

    const result = await controller.update(mockId, mockDto);
    expect(updateTourUseCase.execute).toHaveBeenCalledWith(mockId, mockDto);
    expect(result).toBe(updatedTour);
  });

  it('giveLike → llama al caso de uso y devuelve la respuesta', async () => {
    const mockTour = { id: mockId, likes: 1 };
    (likeTourUseCase.execute as jest.Mock).mockResolvedValue(mockTour);

    const result = await controller.giveLike(mockId);
    expect(likeTourUseCase.execute).toHaveBeenCalledWith(mockId);
    expect(result).toBe(mockTour);
  });

  it('delete → llama al caso de uso y devuelve el mensaje', async () => {
    (deleteTourUseCase.execute as jest.Mock).mockResolvedValue(undefined);

    const result: MessageDto = await controller.delete(mockId);
    expect(deleteTourUseCase.execute).toHaveBeenCalledWith(mockId);
    expect(result).toEqual({ message: 'Recurso eliminado' });
  });

  it('healthCheck → devuelve Hello World!', () => {
    expect(controller.healthCheck()).toEqual({ message: 'Hello World!' });
  });
});
