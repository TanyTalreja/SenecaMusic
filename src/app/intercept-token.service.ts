import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptTokenService {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, nxt: HttpHandler): Observable<HttpEvent<any>> {
    
    if (!req.url.includes("spotify.com")) {
      req = req.clone({
        setHeaders: {
          Authorization: `JWT ${this.auth.getToken()}`
        }
      });
    }

    return nxt.handle(req);
  }


}