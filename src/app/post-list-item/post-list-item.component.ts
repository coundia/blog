import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  // personnalise propriete
  @Input() post: Post;
  ngOnInit() {
  }
  onLoveIt(post: Post) {
    post.loveIt++;
  }

  onDoNotLoveIt(post: Post) {
    post.loveIt--;
  }

}
