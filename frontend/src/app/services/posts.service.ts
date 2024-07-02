import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  public getPosts(){
    return this.http.get<Post[]>("http://localhost:5999/posts/");
  }

  public getPost(id:string){
    return this.http.get<Post>("http://localhost:5999/posts/"+id);
  }

  public addPost(post:Post){
    return this.http.post<Post>("http://localhost:5999/posts/", {
      title:post.title,
      content:post.content,
      author_name:post.author.name,
      author_email:post.author.email
    });
  }

  public updatePost(post:Post){
    return this.http.put<Post>("http://localhost:5999/posts/"+post._id, {
      title:post.title,
      content:post.content,
      author_name:post.author.name,
      author_email:post.author.email
    });
  }
  public deletePost(id:string){
    return this.http.delete("http://localhost:5999/posts/"+id);
  }


}