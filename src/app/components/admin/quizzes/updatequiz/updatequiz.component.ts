import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import { QuizService } from 'src/app/services/quizService/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-updatequiz',
  templateUrl: './updatequiz.component.html',
  styleUrls: ['./updatequiz.component.css']
})
export class UpdatequizComponent implements OnInit{

  updatequiz=new FormGroup({
    quiz_id:new FormControl(null,[Validators.required]),
    title:new FormControl(null,[Validators.required]),
    description:new FormControl(null,[Validators.required]),
    maxMarks:new FormControl(null,[Validators.required]),
    numberOfQuestions:new FormControl(null,[Validators.required]),
    active:new FormControl(null,[Validators.required]),
    category_id:new FormControl(null,[Validators.required])
  }) 

  constructor(private quizService:QuizService,
     private categoryService:CategoryService, 
     private activetedRoute:ActivatedRoute, private router:Router){}
  quiz_id:any;
  updatequizData:any;
  categoryId: any;
  

  ngOnInit(): void {
    this.activetedRoute.params.subscribe((res:any)=>{this.quiz_id= res.id; console.log(this.quiz_id);
    })
    
    this.categoryService.getAllCategory().subscribe((res)=>{
      this.categoryId =res;
    })

    this.quizService.getquizById(this.quiz_id).subscribe((res:any)=>{
      this.updatequizData=res;
      // console.log(this.updatequiz.value)

    });
  }

  upDateQuiz(){
    let updateQuizData={
      "quiz_id":  this.updatequiz.value.quiz_id,
      "title": this.updatequiz.value.title,  
      "description": this.updatequiz.value.description,
      "maxMarks": this.updatequiz.value.maxMarks,
      "numberOfQuestions": this.updatequiz.value.numberOfQuestions,
      "active": this.updatequiz.value.active,
      category: {
        category_id: this.updatequiz.value.category_id
      }
  } 
    console.log(updateQuizData);
    this.quizService.updateQuizOfcategory(updateQuizData).subscribe((res:any)=>{
      Swal.fire({
        title:`${res.title}`,
        text:'Update Success Fully',
        icon:'success'

      })
      this.router.navigate(['admin-dashbord/viewquiz'])
    


    })


  }

}
