import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host:{
    // class:'row',
    // css:'sadasd'
  }
})
export class ArticleComponent implements OnInit {

  votes:number;
  title:string;
  link:string;
  @Input() article :Article;
  constructor() { 
    this.article = new Article("angular 6","https://www.google.com",10);
  }

  ngOnInit() {
  }

  upVote(){
    this.article.voteUp();
    return false;
  }
  downVote(){
    this.article.voteDown();
    return false;
  }
}
