import { IsString, IsNotEmpty, MaxLength, IsUrl } from 'class-validator';

export class CreateTourDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  address: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4000)
  description: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  @IsUrl()
  image: string;
}
