import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-post',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirm-delete-post.component.html',
  styleUrl: './confirm-delete-post.component.css'
})
export class ConfirmDeletePostComponent {
  public title:string="";
  public content:string="";
  constructor (private form:MatDialogRef<ConfirmDeletePostComponent>, @Inject(MAT_DIALOG_DATA) public data: {title: string, content:string}){
    this.title=data.title;
    this.content=data.content;
  }

  public onCloseForm(result:boolean){
    this.form.close(result);

  }

}