import {
  HttpInterceptorFn,
} from "@angular/common/http";
import { inject } from "@angular/core";
import { UtilService } from "../service/util.service";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  const utilService = inject(UtilService);

  let newRequest = req.clone({
    body: req.body,
    headers: req.headers
      .set("Accept", "*/*")
      .set("ngrok-skip-browser-warning", "69420")
      .set("Authorization", "Bearer " + utilService.tokens()?.accessToken!)
  });

  return next(newRequest).pipe(
    catchError((error) => {
      if (error.status === 401) {
        utilService.sair();
      }
      return throwError(() => error);
    })
  );
};
