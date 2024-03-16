import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorResponseInterceptorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  return next(req).pipe(catchError(handleErrorResponse));
};

const handleErrorResponse = (
  error: HttpErrorResponse
): ReturnType<typeof throwError> => {
  const { status, message } = error;
  const errorResponse = `Error code: ${status}, message: ${message}`;
  return throwError(() => errorResponse);
};
