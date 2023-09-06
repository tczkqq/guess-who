export interface IConfig {
  api: string;
  endpoints: IConfigEndpoints;
}

export interface IConfigEndpoints {
  login: string;
  register: string;
  logout: string;
  user: string;
  boards: string;
  cards: string;
}
