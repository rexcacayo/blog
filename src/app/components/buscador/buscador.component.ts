import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Post } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  posts:any[]=[];
  termino:string;
  total:any[]=[];

  constructor(private _dataService:DataService,
      private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
    this.termino = params['termino'];
    this.posts = this._dataService.buscarPost(params['termino']);
    this.total = this.posts;
    for(let i=0; i< this.posts.length; i++){
      this.total[i]['cant']=(this.posts[i].comentarios.length);

    }
    console.log(this.total);
  })



}

verPost( idx:number ){

   this.router.navigate(['/posts',idx])
 }

}
