import { Injectable } from '@angular/core';
import { Speed } from '../_models/speed';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeedService {
  baseUrl = 'https://localhost:5001/api/';
  private currentSpeedSource = new ReplaySubject<Speed>(1);
  currentSpeed$ = this.currentSpeedSource.asObservable();

  constructor(private http: HttpClient) { }

  getSpeedBySecond(model: any){
    return this.http.get<Speed>(this.baseUrl).pipe
    (
      map((response: Speed) => {
        const speed = response;
        if (speed) {
          localStorage.setItem('speed', JSON.stringify(speed));
          this.currentSpeedSource.next(speed);
        }
      })
      )
   }
}
      
