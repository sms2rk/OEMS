import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quizService/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewquiz',
  templateUrl: './viewquiz.component.html',
  styleUrls: ['./viewquiz.component.css']
})
export class ViewquizComponent implements OnInit {

  quizzes:any;
  constructor(private quizService:QuizService){}
  ngOnInit(): void {
    this.getAllQuiz()
  }
  getAllQuiz(){
    this.quizService.getAllquiz().subscribe((res:any)=>{
      this.quizzes=res;
    })
  }

  deletQuiz(quiz_id:any){

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
        this.quizService.deletQuizById(quiz_id).subscribe((res:any)=>{
          console.log(res);
          this.getAllQuiz();
        })
      }
    })

    
  }

}
