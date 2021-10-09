import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiMoviesService } from 'src/app/core/services/api-movies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formulario: FormGroup;
  public nameVacio: boolean;
  constructor(private fb: FormBuilder,
              private router: Router,
              private movieService: ApiMoviesService) { }

  ngOnInit(): void {
    this.dataBuilder();
  }

  public dataBuilder(): void{
    this.formulario = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  public login(form: any): void{
    if (form.nombre === ''){
      this.nameVacio = true;
      this.movieService.authLogin(form.nombre);
    }else {

      this.nameVacio = false;
      this.movieService.authLogin(form.nombre);
      this.router.navigate(['/inicio']);
    }
  }

  get validarNombre(): boolean{
    return this.formulario.get('nombre').invalid && this.formulario.get('nombre').touched;
  }

}
