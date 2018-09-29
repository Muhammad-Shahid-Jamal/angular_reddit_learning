import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularReddit';
  articles:Article[];
  constructor(){
    this.articles = [
      new Article("Angular 6","http://www.google.com",3),
      new Article("StackoverFllow","https://www.stackoverflow.com",6),
      new Article("Github","https://www.github.com",5)
    ];
  }
  add_article(title:HTMLInputElement,link:HTMLInputElement):boolean{
    this.articles.push(new Article(title.value,link.value,0));
    title.value='';
    link.value='';
    console.log(this.articles);
    return false;
  }
}
