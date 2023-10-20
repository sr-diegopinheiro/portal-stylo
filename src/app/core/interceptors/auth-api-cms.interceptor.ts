import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export class AuthApiCmsInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = '64794f8b8069b'
    const appId = '64794f8b8069b'

    const headers = request.headers.set('Authorization', `Bearer ${token}`).set('app', appId)

    const authRequest = request.clone({ headers })

    return next.handle(authRequest)
  }
}
