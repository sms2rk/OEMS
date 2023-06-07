import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getAllQuestionByQuizId(quiz_id:any){
    return this.http.get(`${baseUrl}question/quiz/all/`+ quiz_id)
  }

  public setQuestion(addData:any){
    return this.http.post(`${baseUrl}question/`,addData)
  }

  public getQuestionById(question_id:any){
    return this.http.get(`${baseUrl}question/`+question_id)
  }

  public updateQuestion(question:any){
    return this.http.put(`${baseUrl}question/`,question)
  }

  public deleteQuestionById(question_id:any){
    return this.http.delete(`${baseUrl}question/`+question_id)
  }

  public getQuestionOfQuizForTest(quiz_id:any){
    return this.http.get(`${baseUrl}question/quiz/`+quiz_id);
  }

  directSubmit(question:any){
    return this.http.post(`${baseUrl}question/direct-quiz`,question)
  }
}
