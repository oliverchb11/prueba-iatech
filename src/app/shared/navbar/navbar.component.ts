import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() peliculaData = new EventEmitter<string>();
  @Input() btnBuscar: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public buscarMovie(pelicula: string): void {
    this.peliculaData.emit(pelicula);
  }

  public logout(): void {
    this.router.navigate(['/auth/login']);
  }
}
