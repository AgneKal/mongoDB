import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { ConfirmDeletePostComponent } from './confirm-delete-post/confirm-delete-post.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatTableModule, MatButtonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  public posts: Post[]=[];


  private loadData(){
    this.postsService.getPosts().subscribe({
      next:(posts)=>{
        this.posts=posts;
        console.log(posts);
      }
    })
  }

  constructor (private dialog:MatDialog, private postsService:PostsService){
    this.loadData();
  }

  public onAddClick(){
    
    const form=this.dialog.open(AddNewPostComponent);

    form.afterClosed().subscribe((result:boolean)=>{
      if (result==true){
        this.loadData();
      }
    });
    
  }

  public onDeleteClick(id:string, title:string){

    const form=this.dialog.open(ConfirmDeletePostComponent, {
      data:{
        title: 'Blogo įrašo trynimas',
        content: "Ar tikrai norite ištrinti blogo įrašą: "+title+" ?"
      }
    });
    form.afterClosed().subscribe((result:boolean)=>{
      if (result){
        this.postsService.deletePost(id).subscribe({
          next:(result)=>{
            this.loadData();
          }
        });
      }
    })

    
  }

}