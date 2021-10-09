import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMoviesService } from 'src/app/core/services/api-movies.service';
import { ResultsData } from 'src/app/interfaces/results-data';

@Component({
  selector: 'app-detalle-id',
  templateUrl: './detalle-id.component.html',
  styleUrls: ['./detalle-id.component.scss']
})
export class DetalleIdComponent implements OnInit {
  public dataId: ResultsData;
  constructor(private routerActive: ActivatedRoute,
              private apiMovie: ApiMoviesService) { }

  ngOnInit(): void {
    this.idMovie();
  }

  public idMovie(): void {
    this.routerActive.params.subscribe((idMovie) => {
      console.log(idMovie.id);
      const id = idMovie.id;
      this.apiMovie.getPeliculaId$(id).subscribe((movie) => {
        console.log(movie);
        this.dataId = movie;
      });
    });
  }

}
