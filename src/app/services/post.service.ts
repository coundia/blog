
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import {Post} from '../models/post.model';

export class PostService {
  // array posts
  private posts: Array<any> = [];
  // subject array
  postSubject = new Subject<any[]>();
  // emit post
  emitPostSubject() {
    this.postSubject.next(this.posts);
  }
  // add post
  addPost(title: string , content: string) {
     const  p  = new Post(title, content , 0);
     const post = {
       title : p.title,
       content : p.content,
       loveIt : p.loveIt,
       created_at : p.created_at.toString()
     };
    this.posts.push(post);
    console.log(post);
    this.saveAll();
    this.emitPostSubject();
  }
  // supprimer post
  deletePost( post: Post ) {
    const id = this.posts.findIndex(
      (e) => {
        return ( e === post ) ;
      }
    );
    this.posts.splice(id, 1);
    this.saveAll();
    this.emitPostSubject();
  }
  // contructeur
  constructor() {
    // this.getAll();
    // this.emitPostSubject();
  }
  getAll() {
    firebase.database().ref('/posts').on('value',
      (data) => {
        this.posts = data.val() ? data.val() : [];
      }
    );
  }
  saveAll() {
       firebase.database().ref('/posts').set(this.posts);
  }
  loveIt(post: Post) {
    const id = this.posts.findIndex(
      (e) => {
        return ( e === post ) ;
      }
    );
    post.loveIt++;
    // replaces 1 element at  id
    this.posts.splice(id, 1, post);
    this.saveAll();
    this.emitPostSubject();
  }
  dontLoveIt(post: Post) {
    const id = this.posts.findIndex(
      (e) => {
        return ( e === post ) ;
      }
    );
    post.loveIt--;
    // replaces 1 element at  id
    this.posts.splice(id, 1, post);
    this.saveAll();
    this.emitPostSubject();
  }
}
