import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    private post:Post[] = [
        {
          id: "0",
          nombre: "Primer de hoy",
          texto: "La naturaleza lo grande que es.",
          autor: "adele",
          hora: "13:00",
          imagen: "http://img.desmotivaciones.es/201204/calendario3.jpg",
          comentarios:[
            {
              mensaje: "primer comentario",
              escritor: "jose",
            },
            {
              mensaje: "segundo comentario",
             escritor: "miguel",
            }
          ]
        },
        {
          id: "1",
          nombre: "La luna y sus cosas",
          texto: "La noche.",
          autor: "Pedro",
          hora: "16:00",
          imagen: "http://revistatarantula.com/wp-content/uploads/2013/12/Los-%C3%A1ngeles-de-la-noche.jpg",
          comentarios:[
            {
              mnensaje: "primer comentario",
              escritor: "Paco",
            },
            {
              mensaje: "segundo comentario",
              escritor: "Rocio",
            }

          ]
        },
        {
          id: "2",
          nombre: "El mejor libro del mundo",
          texto: "El dia.",
          autor: "Don Quijote",
          hora: "21:00",
          imagen: "https://www.quien.net/wp-content/uploads/don-quijote-de-la-mancha-3.jpg",
          comentarios:[
            {
              mensaje: "primer comentario",
              escritor: "Pepe",
            },
            {
              mensaje: "segundo comentario",
              escritor: "juan",
            }

          ]
        },
        {
          id: "3",
          nombre: "Insolito universo",
          texto: "El mundo Paralelo.",
          autor: "Ghost",
          hora: "07:00",
          imagen: "http://www.lazarus.com.ve/wp-content/uploads/2014/05/Nuestro-Insolito-Universo.jpg",
          comentarios:[
            {
              mensaje: "primer comentario",
              escritor: "luis",
            }

          ]
        },
        {
          id: "4",
          nombre: "Insolito universo parte2",
          texto: "El mundo Paralelo-2.",
          autor: "GhostII",
          hora: "07:00",
          imagen: "https://www.recreoviral.com/wp-content/uploads/2016/04/ILUSTRACIONES-MUNDO-PARALELO-1.jpg",
          comentarios:[]

        }

      ];

  constructor() {
    console.log("Servicio listo para usarse");

  }

  getPosts():Post[]{
     return this.post;
   }
   getPost(id:string){
     return this.post[id];
   }

   buscarPost(termino:string){

     let postArr:Post[]=[];
     termino = termino.toLowerCase();

     for(let posts of this.post){
       let nombre = posts.nombre.toLowerCase();
       if(nombre.indexOf(termino) >= 0 ){
          postArr.push(posts)
       }
     }
     return postArr;
   }

}

export interface Post{
  id: string;
  nombre: string;
  texto: string;
  autor: string;
  hora: string;
  imagen: string;
  comentarios:any[];


}
