import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  info = {
    name: 'Demo',
    email: 'demo@gmail.com',
    date: '23/1/2024',
  };
  comments :Comment[]=[];
  getInfo() {
    return this.info;
  }

  constructor() {}
  getAllComments():Comment[] {
    return this.comments;
  }
  addComment(c) {
    c.date = new Date();
    this.comments.push(c);
  }
}
