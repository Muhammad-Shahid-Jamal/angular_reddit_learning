import { Component, OnInit } from '@angular/core';
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
  article :Article;
  constructor() { 
    this.article = new Article("angular 6","https://www.google.com",10);
  }

  ngOnInit() {
  }

  upVote(){
    this.article.votes +=1;
    return false;
  }
  downVote(){
    if(this.article.votes > 0){
      this.article.votes -=1;
    }else{
      this.article.votes = 0;
    }
    
    return false;
  }
}
