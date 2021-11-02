import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';

@Injectable()
export class EnvironmentInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiUrl = environment.url;
    const httpsReq = req.clone({
      url: `${apiUrl}${req.url}`
    });
    console.log(`${apiUrl}${req.url}`);
    return next.handle(httpsReq);
  }
}
