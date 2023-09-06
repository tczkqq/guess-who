import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IApiBoard } from '@models/board.model';
import { ConfigService } from '@services/config.service';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  api = this.configService.api + this.configService.endpoints.boards;

  constructor(private http: HttpClient, private configService: ConfigService) {}

  getAll(): Observable<IApiBoard[]> {
    return this.http.get<IApiBoard[]>(this.api);
  }

  getDetails(id: number): Observable<IApiBoard> {
    return this.http.get<IApiBoard>(this.api + id.toString() + '/');
  }

  update(id: number, data: IApiBoard): Observable<IApiBoard> {
    return this.http.put<IApiBoard>(this.api + id.toString() + '/', data);
  }

  delete(id: number): Observable<null> {
    return this.http.delete<null>(this.api + id.toString() + '/');
  }

  submit(data: IApiBoard): Observable<IApiBoard> {
    return this.http.post<IApiBoard>(this.api, data);
  }
}
