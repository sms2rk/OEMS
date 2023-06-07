import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quizService/quiz.service';

@Component({
  selector: 'app-loadquiz',
  templateUrl: './loadquiz.component.html',
  styleUrls: ['./loadquiz.component.css']
})
export class LoadquizComponent implements OnInit {
  constructor(private quizService:QuizService, private Activroute:ActivatedRoute){}
 
  category_id:any;
  quiz:any;
  ngOnInit(): void {
    this.Activroute.params.subscribe((category_id:any)=>{
    console.log(category_id.category_id);
    this.category_id=category_id.category_id;

    if(this.category_id==0){
      this.quizService.getActiveQuiz().subscribe((res:any)=>{
        this.quiz=res;
        console.log(this.quiz);
      })

    }else{
      this.quizService.getActiveQuizByCategoryId(this.category_id).subscribe((res:any)=>{
        this.quiz=res;
      })
    }
    })   
  }

}
