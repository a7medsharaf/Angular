import { Component, OnInit } from '@angular/core';
import { of,from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  ngOnInit(): void {
    
of(3,4,5).subscribe(val=>{console.log(val)});

  }
 


}
