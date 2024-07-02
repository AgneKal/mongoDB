import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, NgForm } from '@angular/forms';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-add-new-post',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDividerModule, FormsModule],
  templateUrl: './add-new-post.component.html',
  styleUrl: './add-new-post.component.css'
})
export class AddNewPostComponent {
  constructor (private form:MatDialogRef<AddNewPostComponent>, private postsService:PostsService){

  }

  public onCloseForm(){
    this.form.close(false);

  }

  public onSubmitPost(form:NgForm){
    console.log(form.form.value);
    this.postsService.addPost({
      title:form.form.value.title,
      content:form.form.value.content,
      author:{
        name:form.form.value.author_name,
        email:form.form.value.author_email
      },
      comments:[]
    }).subscribe({
      next:(result)=>{
        //console.log(result);
        this.form.close(true);
      }
    })
    
  } 

}