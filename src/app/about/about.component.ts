import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { Comment } from '../shared/comment';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  // template: '<p> hehehehe </p>'
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public title = 'About Us';

  // info = {
  //   name : 'Demo',
  //   email : 'demo@gmail.com',
  //   date : '23/1/2024'
  // }
  info = null;
  msg = false;

  comment: Comment = {
    id: -1,
    date: null,
    message: '',
  };
  commentList: Comment[];

  color= {
    vert: 'green',
    rouge: 'red',
  };
  ngOnInit(): void {
 
    this.info = this.aboutService.getInfo();
    this.commentList = this.aboutService.getAllComments();
  }

  constructor(private aboutService: AboutService, private router : Router) {}
  addMsg() {
    // this.commentList.push({
    //   date: new Date(),
    //   message: this.comment.msg,
    // });

    console.log(this.comment);

    //utilisation du service
    this.aboutService.addComment({
      //we didn't increment the id
      id: this.comment.id,
      date: new Date(),
      message: this.comment.message,
    });

    console.log('Msg Added');
    // console.log(this.commentList);
    this.comment.message = '';
  }
onContact(){
 this.router.navigate(['/contact']);
}

}
