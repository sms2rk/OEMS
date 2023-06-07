import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/QuestionService/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  quiz_id: any;
  quiz_title: any;



  addquestion = new FormGroup({
    content: new FormControl(null, [Validators.required]),
    option1: new FormControl(null, [Validators.required]),
    option2: new FormControl(null, [Validators.required]),
    option3: new FormControl(null, [Validators.required]),
    option4: new FormControl(null, [Validators.required]),
    answer: new FormControl(null, [Validators.required])

  })
  // quiz_Id: any;

  question = {
    "content": this.addquestion.value.content,
    "option1": this.addquestion.value.option1,
    "option2": this.addquestion.value.option2,
    "option3": this.addquestion.value.option3,
    "option4": this.addquestion.value.option4,
    "answer": this.addquestion.value.answer

  }

  constructor(private questionService: QuestionService, private activaedRoute: ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    this.activaedRoute.params.subscribe((res: any) => {
      this.quiz_id = res.id;
      this.quiz_title = res.title;

    })
  }

  addQuestion() {

    let question = {
      "content": this.addquestion.value.content,
      "option1": this.addquestion.value.option1,
      "option2": this.addquestion.value.option2,
      "option3": this.addquestion.value.option3,
      "option4": this.addquestion.value.option4,
      "answer": this.addquestion.value.answer,
      quiz: {
        "quiz_id": this.quiz_id,
      }
    }
  

    console.log(question);
    this.questionService.setQuestion(question).subscribe((res:any)=>{
      Swal.fire({
        title:`${res.content}`,
        text:'success fully added',
        icon:'success'
      })
      this.router.navigate([`/admin-dashbord/viewquestion/${this.quiz_id}/${this.quiz_title}`])
    },(err)=>{
      Swal.fire({
        title:`somthing went worng`,
        text:'req refuse added',
        icon:'error'
      })
    })

  }
 
}
