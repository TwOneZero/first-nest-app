import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAllMovies(): Movie[] {
    return this.movieService.getAllMovies();
  }

  @Get('/:id')
  getOneMovie(@Param('id') movieId: string): Movie {
    return this.movieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return this.movieService.delete(movieId);
  }

  @Patch('/:id')
  update(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMoive: movieId,
      ...updateData,
    };
  }
}
