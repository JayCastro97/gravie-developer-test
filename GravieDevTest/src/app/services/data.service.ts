import { AppError } from './../common/app-error';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = "7576f84fa7d44592ecefe17efbb7249d84817bfc";
  constructor(private url: string, private http: HttpClient) { }
  
  getGame(id: string) {
    this.http.get<any[]>(this.url + `game/${id}/?api_key=${this.apiKey}`)
    .subscribe(data => console.log(data))
    
    return this.http.get<any[]>(this.url + `game/${id}/?api_key=${this.apiKey}`)
    .pipe(catchError(this.handleError));
  }

  getAll() {
	  return this.http.get<any[]>(this.url)
	  	.pipe(catchError(this.handleError));
  }
	
  create(resource: any) {
	  return this.http.post(this.url, resource)
	  	.pipe(catchError(this.handleError));
  }
	
  delete(resource: any) {
	  return this.http.delete(this.url + '/' + resource.id)
	  	.pipe(catchError(this.handleError)); 
  }
	
  private handleError(error: Response) {
	  if(error.status === 400)
	  	return Observable.throw(new BadInput());
	  
	  if(error.status === 404)
		return Observable.throw(new NotFoundError());
	  
	  return Observable.throw(new AppError());
  }

}