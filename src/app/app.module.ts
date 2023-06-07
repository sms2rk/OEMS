import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AdmindashbordComponent } from './components/admin/admindashbord/admindashbord.component';
import { UserdashbordComponent } from './components/user/userdashbord/userdashbord.component';
import { SidebarComponent } from './components/user/sidebar/sidebar.component';
import { AdminSidebarComponent } from './components/admin/sidebar/sidebar.component';
import { ViewCategoryComponent } from './components/admin/Category/view-category/view-category.component';
import { AddCategoryComponent } from './components/admin/Category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/admin/Category/update-category/update-category.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddquizComponent } from './components/admin/quizzes/addquiz/addquiz.component';
import { UpdatequizComponent } from './components/admin/quizzes/updatequiz/updatequiz.component';
import { ViewquizComponent } from './components/admin/quizzes/viewquiz/viewquiz.component';
import { AddquestionComponent } from './components/admin/question/addquestion/addquestion.component';
import { UpdatequestionComponent } from './components/admin/question/updatequestion/updatequestion.component';
import { ViewquestionComponent } from './components/admin/question/viewquestion/viewquestion.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/interceptorService/auth.interceptor';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { LoadquizComponent } from './components/user/loadquiz/loadquiz.component';
import { InstructionComponent } from './components/user/instruction/instruction.component';
import { StartquizComponent } from './components/user/startquiz/startquiz.component';



@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdmindashbordComponent,
    UserdashbordComponent,
    AdminSidebarComponent,
    SidebarComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    ProfileComponent,
    AddquizComponent,
    UpdatequizComponent,
    ViewquizComponent,
    AddquestionComponent,
    UpdatequestionComponent,
    ViewquestionComponent,
    LoadquizComponent,
    InstructionComponent,
    StartquizComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true 
    }),
    FormsModule,
    MatProgressSpinnerModule
    
    
    
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
