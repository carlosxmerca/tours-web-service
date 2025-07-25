import { Tour } from './Tour';

describe('Tour entity', () => {
  let tour: Tour;

  beforeEach(() => {
    tour = new Tour(
      '123e4567-e89b-12d3-a456-426614174000',
      'Playa el tunco',
      'La Libertad',
      'Hermosas playas',
      'https://example.com/image.jpg',
      5,
      new Date('2023-01-01T00:00:00Z'),
      new Date('2023-01-01T00:00:00Z'),
    );
  });

  test('should create an instance with given values', () => {
    expect(tour.id).toBe('123e4567-e89b-12d3-a456-426614174000');
    expect(tour.name).toBe('Playa el tunco');
    expect(tour.address).toBe('La Libertad');
    expect(tour.description).toBe('Hermosas playas');
    expect(tour.image).toBe('https://example.com/image.jpg');
    expect(tour.likes).toBe(5);
    expect(tour.createdAt).toEqual(new Date('2023-01-01T00:00:00Z'));
    expect(tour.updatedAt).toEqual(new Date('2023-01-01T00:00:00Z'));
  });

  test('like() should increment likes and update updatedAt', () => {
    const oldUpdatedAt = tour.updatedAt;
    tour.like();
    expect(tour.likes).toBe(6);
    expect(tour.updatedAt.getTime()).toBeGreaterThan(oldUpdatedAt.getTime());
  });

  describe('updateDetails()', () => {
    test('should update all provided fields and updatedAt', () => {
      const oldUpdatedAt = tour.updatedAt;
      tour.updateDetails({
        name: 'Comasagua',
        address: 'La Libertad',
        description: 'Centro turistico',
        image: 'https://example.com/new-image.jpg',
      });
      expect(tour.name).toBe('Comasagua');
      expect(tour.address).toBe('La Libertad');
      expect(tour.description).toBe('Centro turistico');
      expect(tour.image).toBe('https://example.com/new-image.jpg');
      expect(tour.updatedAt.getTime()).toBeGreaterThan(oldUpdatedAt.getTime());
    });

    test('should update only provided fields', () => {
      const oldName = tour.name;
      const oldAddress = tour.address;
      const oldUpdatedAt = tour.updatedAt;

      tour.updateDetails({ description: 'Descripción actualizada' });
      expect(tour.name).toBe(oldName);
      expect(tour.address).toBe(oldAddress);
      expect(tour.description).toBe('Descripción actualizada');
      expect(tour.updatedAt.getTime()).toBeGreaterThan(oldUpdatedAt.getTime());
    });

    test('should do nothing if no fields provided except update updatedAt', () => {
      const oldName = tour.name;
      const oldAddress = tour.address;
      const oldDescription = tour.description;
      const oldImage = tour.image;
      const oldUpdatedAt = tour.updatedAt;

      tour.updateDetails({});
      expect(tour.name).toBe(oldName);
      expect(tour.address).toBe(oldAddress);
      expect(tour.description).toBe(oldDescription);
      expect(tour.image).toBe(oldImage);
      expect(tour.updatedAt.getTime()).toBeGreaterThan(oldUpdatedAt.getTime());
    });
  });
});
