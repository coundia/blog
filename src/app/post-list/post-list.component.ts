import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit , OnDestroy {
   posts: Post[];
   postsSubcribtion: Subscription;

  ngOnInit() {
    // console.log("ngOnInit");
    this.postsSubcribtion = this.postService.postSubject.subscribe(
      (posts) => {
        this.posts = posts.sort(function (a, b) {
          return  b.loveIt - a.loveIt ;
        });
      }
    );
     this.postService.getAll();
    this.postService.emitPostSubject();
  }
  constructor ( private postService: PostService) {
   // console.log("constructeur");
    this.postService.getAll();
    this.postService.emitPostSubject();
  }
  ngOnDestroy() {
    this.postsSubcribtion.unsubscribe();
  }
}
