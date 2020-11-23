import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Isample} from './sample';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private url:string = "/assets/data/sample.json";
  
  constructor(private http:HttpClient) { }
  getData():Observable<Isample[]>{
   return this.http.get<Isample[]>(this.url)
  }
}
