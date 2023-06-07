import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/QuestionService/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-startquiz',
  templateUrl: './startquiz.component.html',
  styleUrls: ['./startquiz.component.css']
})
export class StartquizComponent implements OnInit {
  isSubmit:boolean=false;
  question:any; 
  timer:any;
  marksGot:any=0;
  correctAnswers:any=0;
  attempted:any=0;
  quiz_id:any;
  constructor(private questionService:QuestionService, private activetedRoute:ActivatedRoute, private locationStr:LocationStrategy){}
  ngOnInit(): void {
    this.preventBackButton();
  

    this.activetedRoute.params.subscribe((res:any)=>{
      this.quiz_id=res.quiz_id;
      console.log(this.quiz_id);
      
    })
    this.questionService.getQuestionOfQuizForTest(this.quiz_id).subscribe((res:any)=>{
      this.question=res;
      console.log(this.question);

      this.timer=this.question.length*0.60*60 ;
      this.startTimer();
      
    })

  }
  startTimer(){
    let t=window.setInterval(()=>{
      if(this.timer<=0){
        clearInterval(t);
      }else{
        this.timer --;
      }
    },1000)
  }

  getFormatedTime(){
    let mm=Math.floor(this.timer/60)
    let ss=this.timer-mm*60;
    return `${mm}:${ss}`
  }

  preventBackButton(){
    history.pushState(null,location.href);
    this.locationStr.onPopState(()=>{
      history.pushState(null,location.href)
    });
  }

  submitExam(){
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you wont to Submit Quiz!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit Quiz'
    }).then((result) => {
      if (result.isConfirmed) {
       this.DirectSubmitExam()
      }
    })
  }

  DirectSubmitExam(){
    console.log(this.question);

    this.questionService.directSubmit(this.question).subscribe((res:any)=>{
      console.log(res);
      this.attempted =res.attempted;
      this.correctAnswers=res.correctAnswers;
      this.marksGot=parseFloat(Number(res.marksGot).toFixed(2))
      this.isSubmit=true;
    })
  }

  printResult(){
    window.print()
  }

}
