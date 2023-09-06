export interface IMenuItem {
  name: string;
  icon?: string;
  redirect?: string;
  subItems?: IMenuItem[];
  visible?: boolean;
}
