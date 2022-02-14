import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultname:string='Ahmed';
  gender:string[]=['Male','Female'];
  //tsconfig ->strictPropertyInitialization=false
  @ViewChild("f") signupform:NgForm;
  onSubmit(F:NgForm)
  {
    console.log('submitted');
    console.log(F);
  }
  onsuggest()
  {
    this.signupform.form.patchValue({
      UserData:{username:"superman"}
    })
  }
}
