import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/QuestionService/question.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit {

  question_id: any;
  quiz_title:any;
  question:any;
  


  updatequestion=new FormGroup({ 
    content:new FormControl(null,[Validators.required]),
    option1:new FormControl(null,[Validators.required]),
    option2:new FormControl(null,[Validators.required]),
    option3:new FormControl(null,[Validators.required]),
    option4:new FormControl(null,[Validators.required]),
    answer:new FormControl(null,[Validators.required])

  })


  constructor(private questionService:QuestionService, private ActivatedRoute:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
  
    this.ActivatedRoute.params.subscribe((res:any)=>{console.log(res);
    
      this.question_id =res.id;
      this.quiz_title = res.title;
    });

    this.questionService.getQuestionById(this.question_id).subscribe((res:any)=>{
      this.question=res; 
      console.log(this.question);
      
    })
  }
    updateQuestionSubmit(){
      let question = {
        question_id:this.question.question_id,
        "content": this.updatequestion.value.content,
        "option1": this.updatequestion.value.option1,
        "option2": this.updatequestion.value.option2,
        "option3": this.updatequestion.value.option3,
        "option4": this.updatequestion.value.option4,
        "answer": this.updatequestion.value.answer,
        quiz: {
          "quiz_id":this.question.quiz.quiz_id
        }
      };  

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't update this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then((result) => {
        if (result.isConfirmed) {
        this.questionService.updateQuestion(question).subscribe((res)=>{
          console.log(res);
          this.router.navigate([`/admin-dashbord/viewquestion/${this.question.quiz.quiz_id}/${this.quiz_title}`])
        })
          
        }
      })
  }

}
 