/*
 * @Author: helishou
 * @Date: 2021-05-19 21:56:32
 * @Last Modified by:   helishou
 * @Last Modified time: 2021-05-19 21:56:32
 */
export interface ICategory {
  parentId: string;
  _id: string;
  name: string;
  __v: number;
  categoryName: string;
  parentName: string;
}

export interface CategoryModel {
  parentId: string;
  id: number;
  name: string;
  categoryName: string;
  parentName: string;
}
