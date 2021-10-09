import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiMoviesService } from 'src/app/core/services/api-movies.service';
import { DataMovie } from 'src/app/interfaces/data-movie';
import { ResultsData } from 'src/app/interfaces/results-data';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public resultsMovies: ResultsData[];
  public pelicula: string;
  public page = Array(20);
  public contador = 1;
  public i;
  constructor(private apiMovie: ApiMoviesService,
              private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
  }

 public getMovies(id?: number): void {
   this.apiMovie.getTopMovies(id).subscribe((movies: DataMovie) => {
     console.log(movies.results);
     this.resultsMovies = movies.results;
   });
 }

 public buscarMovie(pelicula: string): void {
   this.pelicula = pelicula;
   if (this.pelicula === ''){
     console.log('no hay nada');
     this.getMovies();
    }else {
     console.log(pelicula);
     this.apiMovie.buscarPeliculas$(pelicula).subscribe((movies: DataMovie) => {
     console.log(movies);
     this.resultsMovies = movies.results;
   });
   }

 }

 public pagination(i: number): void {
   console.log(i);
   this.i = i;
   this.contador = 0;
   this.contador = this.contador + i;
   this.getMovies(i);
 }

 public anteriorPage(): void {
  this.contador = this.contador -  1;
  this.getMovies(this.contador);
}
public siguientePage(): void {
  this.contador = this.contador +  1;
  this.getMovies(this.contador);
 }

 public detallePelicula(id: number): void {
   console.log(id);
   this.router.navigate(['/inicio/detalle', id]);
 }


}
