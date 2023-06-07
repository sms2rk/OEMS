import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService{

  constructor(private http:HttpClient) { }

  public addquizOfcategory(quizData:any){

    return this.http.post(`${baseUrl}quiz/`, quizData);
  }

  public getAllquiz(){
    return this.http.get(`${baseUrl}quiz/`);
  }

  public getquizById(quiz_id:any){
    return this.http.get(`${baseUrl}quiz/`+quiz_id);
  }

  public updateQuizOfcategory(quizData:any){
    return this.http.put(`${baseUrl}quiz/`, quizData);
  }

  public deletQuizById(quiz_id:any){
    return this.http.delete(`${baseUrl}quiz/`+quiz_id)
  }

  public getActiveQuiz(){
    return this.http.get(`${baseUrl}quiz/active`);
  }

  public getActiveQuizByCategoryId(category_id:any){
    return this.http.get(`${baseUrl}quiz/category/active/`+category_id)
  }


 
}
