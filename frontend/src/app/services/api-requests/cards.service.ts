import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IApiCard } from '@models/card.model';
import { ConfigService } from '@services/config.service';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  api = this.configService.api + this.configService.endpoints.cards;

  constructor(private http: HttpClient, private configService: ConfigService) {}

  getAll(): Observable<IApiCard[]> {
    return this.http.get<IApiCard[]>(this.api);
  }

  getDetails(id: number): Observable<IApiCard> {
    return this.http.get<IApiCard>(this.api + id.toString() + '/');
  }

  update(id: number, data: IApiCard): Observable<IApiCard> {
    return this.http.put<IApiCard>(this.api + id.toString() + '/', data);
  }

  delete(id: number): Observable<null> {
    return this.http.delete<null>(this.api + id.toString() + '/');
  }

  submit(data: IApiCard): Observable<IApiCard> {
    return this.http.post<IApiCard>(this.api, data);
  }
}
