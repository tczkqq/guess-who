import { Injectable } from '@angular/core';

import { IConfigEndpoints } from '@models/config.model';
import ConfigJson from '@assets/config.json';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  language: string;
  theme: string;
  sound: boolean;

  endpoints: IConfigEndpoints = ConfigJson.endpoints;
  api: string = ConfigJson.api;
}
