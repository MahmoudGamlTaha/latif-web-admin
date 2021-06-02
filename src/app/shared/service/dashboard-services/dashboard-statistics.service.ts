import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { server } from 'src/environments/environment';

export interface Idashboard {
  userSubscriptionsCount: number;
  ServiceAdsCount: number;
  AccessoriesAdsCount: number;
  PetCareAdsCount: number,
  AllAdsCount: number,
  PetAdsCount: number,
}

@Injectable({
  providedIn: 'root'
})

export class DashboardStatisticsService {

  _dashboard = server.url + 'api/public/dashboard/dashboard';

  constructor(public _http: HttpClient) { }

  getbDashboardStatistics(): Observable<Idashboard[] > {
    return this._http.get<Idashboard[]>(this._dashboard)
      .pipe(
        catchError((err) => {
          return throwError(err.message || 'server issue ');
        })
      );
  }

}
