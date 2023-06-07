import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/QuestionService/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewquestion',
  templateUrl: './viewquestion.component.html',
  styleUrls: ['./viewquestion.component.css']
})
export class ViewquestionComponent implements OnInit{

  quiz_id:any;
  quiz_title:any;
  questions:any=[]

  constructor(private questionService:QuestionService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res:any)=>{
      this.quiz_id=res.id;
      this.quiz_title=res.title;
    })
    // console.log(this.quiz_id);
    this.getAllQuestion();
  }

  getAllQuestion(){
    this.questionService.getAllQuestionByQuizId(this.quiz_id).subscribe((res:any)=>{
    console.log(res);
    this.questions  =res;
    }) 
    
  }
  deleteQuestionById(question_id:any){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );

    this.questionService.deleteQuestionById(question_id).subscribe((res)=>{
      console.log(res);
      this.getAllQuestion();
    })
  }
})
  }
  
}
