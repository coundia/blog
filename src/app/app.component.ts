import { Component } from '@angular/core';
// type post
export class Post {
  public created_at: Date;
  constructor(public title: string, public content: string, public loveIt: number) {
    this.created_at = new Date();
  }
}
// decorateur
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // array posts
  public posts: Array<Post> = [
    new Post('mon premier post',' lorem dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, eff' +
      'lorem dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, eff' +
      'lorem dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, eff', 1),
    new Post('mon deuxieme post','  dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, eff' +
      'dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, eff' +
      'dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, eff', 0),
    new Post('encore un post',' ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, eff' +
      'ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, eff' +
      'ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, eff', -1)
  ];
}
