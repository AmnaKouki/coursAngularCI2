import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpmsgService {

  constructor() { }
  public handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof ErrorEvent)/* Erreur locale coté client/ */ {
      errMsg = error.error.message;
    }
    else{
      errMsg = `Json Server Error : ${error.status} - ${error.statusText || ''}`;
    } 
    return throwError(errMsg);
  }
}
