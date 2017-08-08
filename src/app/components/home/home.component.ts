import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Post } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  posts:Post[] = [];
  cantComent:any[]=[];
  total:any[]=[];


  constructor( private _dataService:DataService,
      private router:Router
  ) {
     }



  ngOnInit() {

    this.posts = this._dataService.getPosts();

    this.total = this.posts;
    for(let i=0; i< this.posts.length; i++){
      this.total[i]['cant']=(this.posts[i].comentarios.length);

    }

  }

  verPost( idx:number ){

     this.router.navigate(['/posts',idx])
   }





}
