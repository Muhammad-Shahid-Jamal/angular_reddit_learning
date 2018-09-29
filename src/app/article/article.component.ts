import { Component, OnInit } from '@angular/core';

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

  constructor() { 
    this.title = "angular 6";
    this.votes = 10;
    this.link = "http://www.google.com";
  }

  ngOnInit() {
  }

  upVote(){
    this.votes +=1;
    return false;
  }
  downVote(){
    this.votes -=1;
    return false;
  }
}
