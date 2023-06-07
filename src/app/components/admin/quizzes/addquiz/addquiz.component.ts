import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import { QuizService } from 'src/app/services/quizService/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent implements OnInit{

  addquiz=new FormGroup({
    title:new FormControl(null,[Validators.required]),
    description:new FormControl(null,[Validators.required]),
    maxMarks:new FormControl(null,[Validators.required]),
    numberOfQuestions:new FormControl(null,[Validators.required]),
    active:new FormControl(null,[Validators.required]),
    category_id:new FormControl(null,[Validators.required])
  })  
  constructor(private categoryService:CategoryService, private quizService:QuizService, private router:Router){}

  categoryId: any;

  addquizData={
    title: this.addquiz.value.title,
    description: this.addquiz.value.description,
    maxMarks: this.addquiz.value.maxMarks,
    numberOfQuestions: this.addquiz.value.numberOfQuestions,
    active: this.addquiz.value.active,
    category: {
      category_id : this.addquiz.value.category_id
    }
}

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((res:any)=>{
      this.categoryId =res;
    })
  }


  addQuiz(){
    let addQuizData={
      "title": this.addquiz.value.title,  
      "description": this.addquiz.value.description,
      "maxMarks": this.addquiz.value.maxMarks,
      "numberOfQuestions": this.addquiz.value.numberOfQuestions,
      "active": this.addquiz.value.active,
      category: {
        category_id: this.addquiz.value.category_id
      }
  }
    console.log(addQuizData);

    this.quizService.addquizOfcategory(addQuizData).subscribe((res:any)=>{
      Swal.fire({
        title :`${res.title}`,
        text:"Quiz added success fully",
        icon:'success'
      })
      this.router.navigate(['admin-dashbord/viewquiz'])
    })


    
  }
 

}
