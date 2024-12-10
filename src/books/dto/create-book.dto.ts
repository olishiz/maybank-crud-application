import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ description: 'Name of the book' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Description of the book' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Author of the book' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ description: 'Price of the book in MYR' })
  @IsNumber()
  @Min(0)
  price: number;
}
