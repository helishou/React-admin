/*
 * @Author: helishou 
 * @Date: 2021-05-21 22:55:51 
 * @Last Modified by:   helishou 
 * @Last Modified time: 2021-05-21 22:55:51 
 */
export class CRole {
  public menus: any;
  public auth_time: number = 0;
  public auth_name: string = "";
  public _id: number = 0;
  public name:string = ''
}

export interface IUser {
  username: string;
  role_id: number;
}