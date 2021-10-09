import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiMoviesService } from '../core/services/api-movies.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate  {
  constructor( protected router: Router,
               private movieService: ApiMoviesService){
                 console.log('ghola');
  }

  canActivate(): boolean {
    if (this.movieService.authLogin()){
      console.log('entro');
      this.router.navigate(['/inicio']);
      return true;
    }else{
      this.router.navigate(['/auth/login']);
      console.log('no entro');
      return false;
    }
  }

}
