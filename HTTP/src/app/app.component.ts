import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie.model';
import { Movies } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HTTP';
  movie : Movie={movieName:"",Metascore:""};
  mystoredmovies:Movie[]=[];
  searchval:string='';
  constructor(private Movies:Movies)
  {

  }
  ngOnInit(): void {
    this.mystoredmovies=this.Movies.get_recorded_movies() ;
    console.log('starting');
    console.log(this.mystoredmovies);
  }

  onclick()
  {
   
   this.movie= this.Movies.Get_Movie(this.searchval);
   
  // console.log(this.movie);
  }

  onclickrecord()
  {
   this.Movies.recordMovie(this.movie).subscribe(data => {  
     console.log(data);
    this.mystoredmovies=this.Movies.get_recorded_movies() ;
    });
  }
  onclickdelete()
  {
    this.Movies.deleteallmovies();
  }
}
