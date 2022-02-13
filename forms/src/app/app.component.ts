import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultname:string='Ahmed';

  onSubmit(F:NgForm)
  {
    console.log('submitted');
    console.log(F);
  }
}
