/*
 * @Author: helishou 
 * @Date: 2021-05-20 10:44:34 
 * @Last Modified by: helishou
 * @Last Modified time: 2021-05-20 11:07:13
 */
export interface ProductsModel {
  id?: number;
  images: string;
  status: number;
//   idStr?: string;
  name: string;
  desc: string;
  detail: string;
  categoryId: string;
  pCategoryId: string;
  price: string;
  v: number;
}

export interface FileUploadResponseModel {
  url: string;
  name: string;
}

export interface StringValidator {
  isAcceptable(s: string): boolean;
}
