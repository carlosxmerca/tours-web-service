import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength, IsUrl } from 'class-validator';

export class CreateTourDto {
  @ApiProperty({
    description: 'Nombre del tour',
    example: 'Tour a las Ruinas de Tazumal',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @ApiProperty({
    description: 'Dirección o ubicación del tour',
    example: 'Chalchuapa, Santa Ana, El Salvador',
    maxLength: 300,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  address: string;

  @ApiProperty({
    description: 'Descripción completa del tour',
    example: 'Una experiencia guiada por las antiguas ruinas mayas de Tazumal...',
    maxLength: 4000,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(4000)
  description: string;

  @ApiProperty({
    description: 'URL de la imagen representativa del tour',
    example: 'https://example.com/images/tour-tazumal.jpg',
    maxLength: 300,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  @IsUrl()
  image: string;
}
