import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService
    ) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
       /* let currentUser = this.authenticationService.currentUserValue;
            if (currentUser && currentUser.accessToken) {
                request = request.clone({
                    setHeaders: {
                        'x-access-token ': currentUser.accessToken,
                    },
                });
            }*/
        return next.handle(request);
    }
}
