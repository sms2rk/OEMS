import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdmindashbordComponent } from './components/admin/admindashbord/admindashbord.component';
import { UserdashbordComponent } from './components/user/userdashbord/userdashbord.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewCategoryComponent } from './components/admin/Category/view-category/view-category.component';
import { AddCategoryComponent } from './components/admin/Category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/admin/Category/update-category/update-category.component';
import { AddquizComponent } from './components/admin/quizzes/addquiz/addquiz.component';
import { UpdatequizComponent } from './components/admin/quizzes/updatequiz/updatequiz.component';
import { ViewquizComponent } from './components/admin/quizzes/viewquiz/viewquiz.component';
import { AddquestionComponent } from './components/admin/question/addquestion/addquestion.component';
import { UpdatequestionComponent } from './components/admin/question/updatequestion/updatequestion.component';
import { ViewquestionComponent } from './components/admin/question/viewquestion/viewquestion.component';
import { AuthGuard } from './services/adminGuard/auth.guard';
import { LoadquizComponent } from './components/user/loadquiz/loadquiz.component';
import { InstructionComponent } from './components/user/instruction/instruction.component';
import { StartquizComponent } from './components/user/startquiz/startquiz.component';
import { AuthUserGuard } from './services/userGuard/auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"admin-dashbord",component:AdmindashbordComponent, canActivate:[AuthGuard],

  children:[
  {path:"profile", component:ProfileComponent},
  {path:"viewcategory", component: ViewCategoryComponent},
  {path:"addcategory", component: AddCategoryComponent},
  {path:"updatecategory/:id", component: UpdateCategoryComponent},
  {path:"addquiz", component: AddquizComponent},
  {path:"updatequiz/:id", component: UpdatequizComponent},
  {path:"viewquiz", component: ViewquizComponent},
  {path:"addquestion/:id/:title", component: AddquestionComponent},
  {path:"updatequestion/:id/:title", component: UpdatequestionComponent},
  {path:"viewquestion/:id/:title", component: ViewquestionComponent},
  ]},

  {path:"user-dashbord",component:UserdashbordComponent, canActivate:[AuthUserGuard],

    children:[
      
      {path:":category_id", component:LoadquizComponent},
      {path:"instruction/:quiz_id", component:InstructionComponent}
    ]
  },
  {path:"startquiz/:quiz_id", component:StartquizComponent, canActivate:[AuthUserGuard]}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
