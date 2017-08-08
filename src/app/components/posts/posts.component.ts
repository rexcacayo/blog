import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {

  post:any ={};
  comentarios:any=[];

  constructor(
    private activatedRoute: ActivatedRoute,
                private _postService: DataService
  ) {

    this.activatedRoute.params.subscribe( params => {

      this.post = this._postService.getPost(params['id']);
      this.comentarios = this.post.comentarios
      



  })
}

  ngOnInit() {
  }

}
