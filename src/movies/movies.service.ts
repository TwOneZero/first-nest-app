import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  //모든 영화 return
  getAllMovies(): Movie[] {
    return this.movies;
  }

  //id에 해당하는 영화 return
  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  //create
  create(movie: Movie): number {
    return this.movies.push({
      id: this.movies.length + 1,
      ...movie,
    });
  }

  //삭제
  delete(id: string): boolean {
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }
}
