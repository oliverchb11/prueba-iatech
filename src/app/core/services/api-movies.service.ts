import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataMovie } from 'src/app/interfaces/data-movie';
import { ResultsData } from 'src/app/interfaces/results-data';
import { environment } from 'src/environments/environment';
const PATH = environment.PATH;
const API_KEY = environment.API_KEY;
@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  private nombreSubject = new Subject<boolean>();
  public nombreObservador$ = this.nombreSubject.asObservable();
  constructor(private http: HttpClient) { }

  public getTopMovies(page = 1): Observable<DataMovie>{
    return this.http.get<DataMovie>(`${PATH}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=es&page=${page}`);
  }

 public buscarPeliculas$(pelicula: string): Observable<DataMovie>{
    return this.http.get<DataMovie>(`${PATH}search/movie?api_key=${API_KEY}&language=es&query=${pelicula}`);
 }

 public getPeliculaId$(id: string): Observable<ResultsData>{
  return this.http.get<ResultsData>(`${PATH}movie/${id}?api_key=${API_KEY}&language=es`);
}

public authLogin(nombre?: string): boolean{
  if (nombre === ''){
    console.log('vacio servicio');
    return false;
  }else {
    console.log('lleno servicio');
    return true;
  }
}
}
