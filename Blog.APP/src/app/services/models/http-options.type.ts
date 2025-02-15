import { HttpHeaders, HttpParams } from '@angular/common/http';

export type HttpQueryParams =
    | HttpParams
    | {
          [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
      };

export type HttpOptions = {
    headers?:
        | HttpHeaders
        | {
              [header: string]: string | string[];
          };
    params?: HttpQueryParams;
    withCredentials?: boolean;
    responseType?: any;
    observe?: any;
};
