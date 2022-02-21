import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, throwError } from 'rxjs';
import { Movie } from "../models/movie.model";


@Injectable()

export class Movies
{
    baseURL:string='http://www.omdbapi.com/';
    
    constructor(private http: HttpClient)
   {
       
   }

    Get_Movie(movieName:string):Movie
   {
      let mymovie:Movie;
      console.log(movieName);
      mymovie=new Movie();   
      let rq=this.baseURL + "?t=" + movieName+"&apikey=7e9a921a&page=5";

      this.http.get<any>(rq).subscribe(
          (response)=>{
            //  console.log((response.Title));
              console.log(response);
             
              mymovie.movieName=response.Title;
              mymovie.Metascore=response.Metascore;
          }

      );

      return mymovie;

   }



  recordMovie( M:Movie):Observable<any>
  {
      let res:string='nothing';
    return this.http.post<any>('https://test-f9c6f-default-rtdb.firebaseio.com/Movies.json', M);
   // return res;
  }

  get_recorded_movies():Movie[]
  {
    let M:Movie[]=[]; 
    this.http.get<{[key:string]:Movie}>('https://test-f9c6f-default-rtdb.firebaseio.com/Movies.json')
    //   .pipe(
    //       map(
    //           ressult=>{
    //            return  Object.values(ressult)
    //           }
    //       )
    //   )
      .subscribe(response=>{
          
      
        for(const key in response)
          {
                  console.log(key);
                  console.log(response[key])
                  M.push(response[key]);
          }
      }
      )
      return M
  }

  deleteallmovies()
  {
      this.http.delete('https://test-f9c6f-default-rtdb.firebaseio.com/Movies.json').subscribe(
          response=>{
              console.log(response);
          }
      )
  }
}