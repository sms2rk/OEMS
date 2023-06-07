import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quizService/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  constructor(private quizService:QuizService, private activatedRoute:ActivatedRoute, private router:Router){}
  quiz_id:any;
  quiz:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res:any)=>{
      this.quiz_id=res.quiz_id;
    })
    this.quizService.getquizById(this.quiz_id).subscribe((res:any)=>{
      this.quiz=res;
    })
  }

  startQuiz(){

    Swal.fire({
      title: 'Are you sure?',
      text: "Do you wont to start the Quiz!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Start Quiz'
    }).then((result) => {
      if (result.isConfirmed) {
       this.router.navigate([`startquiz/${this.quiz_id}`])
      }
    })
  }
}
