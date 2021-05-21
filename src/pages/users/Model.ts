export interface IUserModel {
  username: string;
  _id: number;
  password: string;
  email: string;
  phone: number;
  role_id: number;
}
export interface IRoleModel {
  _id: number;
  name: string;
}
