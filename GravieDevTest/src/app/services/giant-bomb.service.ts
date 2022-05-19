import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GiantBombService extends DataService{

  constructor(http: HttpClient) { 
    super('https://www.giantbomb.com/api/', http);
  }
}
