import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBookDto } from './dto/create-book.dto';

@ApiTags('books')
@Controller('books')
export class BooksController {
  @Post()
  @ApiOperation({ summary: 'Create a new book' })
  @ApiResponse({
    status: 201,
    description: 'The book has been successfully created.',
    type: Book,
  })
  create(@Body() book: CreateBookDto): Book {
    return this.booksService.create(book);
  }

  constructor(private readonly booksService: BooksService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all books' })
  @ApiResponse({ status: 200, description: 'List of books.' })
  findAll(): Book[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a book by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the book to retrieve',
  })
  @ApiResponse({ status: 200, description: 'The book details.' })
  findOne(@Param('id') id: string): Book {
    return this.booksService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a book by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the book to update',
  })
  @ApiResponse({
    status: 200,
    description: 'The book has been successfully updated.',
  })
  update(@Param('id') id: string, @Body() book: Partial<Book>): Book {
    return this.booksService.update(+id, book);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a book by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the book to delete',
  })
  @ApiResponse({
    status: 200,
    description: 'The book has been successfully deleted.',
  })
  remove(@Param('id') id: string): boolean {
    return this.booksService.delete(+id);
  }
}
