import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl  from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  public adcategory(categoryData:any){
    return this.httpClient.post(`${baseUrl}category/`, categoryData, {responseType:'text'})
  }

  public getAllCategory(){
    return this.httpClient.get(`${baseUrl}category/`)
  }

  public getCategoryById(category_id:any){
    return this.httpClient.get(`${baseUrl}category/`+category_id)
  }

  public updateCategoryById(categorydata:any){
    return this.httpClient.put(`${baseUrl}category/`,categorydata)
  }

  public deleteCategoryById(category_id:any){
    return this.httpClient.delete(`${baseUrl}category/`+category_id)
  }
}
