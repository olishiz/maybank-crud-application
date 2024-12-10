import { ApiProperty } from '@nestjs/swagger';

export class Book {
  @ApiProperty({ description: 'Unique identifier for the book' })
  id: number;

  @ApiProperty({ description: 'Name of the book' })
  name: string;

  @ApiProperty({ description: 'Description of the book' })
  description: string;

  @ApiProperty({ description: 'Author of the book' })
  author: string;

  @ApiProperty({ description: 'Price of the book in MYR' })
  price: number;
}
