import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  //모든 영화 return
  getAllMovies(): Movie[] {
    return this.movies;
  }

  //id에 해당하는 영화 return
  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  //create
  create(movie: CreateMovieDto): number {
    return this.movies.push({
      id: this.movies.length + 1,
      ...movie,
    });
  }

  //삭제
  delete(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  //update
  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.delete(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
