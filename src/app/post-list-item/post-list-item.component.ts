import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../models/post.model';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

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
     this.postService.loveIt(post);
  }

  onDoNotLoveIt(post: Post) {
    this.postService.dontLoveIt(post);
  }
  onDelete(p: Post) {
    // console.log("delete post"+ p);
    if ( confirm('Voulez vraiment supprimer ce post ') ) {
        this.postService.deletePost(p);
    }
  }

  constructor(private  postService: PostService , private router: Router) {}

}
