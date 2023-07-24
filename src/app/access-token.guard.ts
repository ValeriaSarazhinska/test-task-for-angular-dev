import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccessTokenGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    const accessToken = credentials?.token;

    if (accessToken) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
