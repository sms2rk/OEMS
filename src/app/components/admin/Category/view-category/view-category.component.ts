import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService){}
  allcategory:any;
  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((res)=>{
      this.allcategory=res;
      console.log(this.allcategory);
      
    })    
  }

  deleteCategory(id:any){
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "Delete this category",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => { 
      if (result.isConfirmed) { 
        this.categoryService.deleteCategoryById(id).subscribe((res)=>{
          console.log(res);
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        window.location.reload();
      }
    })
  
  }

}
