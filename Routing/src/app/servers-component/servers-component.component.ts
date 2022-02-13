import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

import { UserComponentComponent } from '../user-component/user-component.component';
import { HomeComponent } from '../home/home.component';
import { EditserverComponent } from '../servers-component/editserver/editserver.component';

@Component({
  selector: 'app-servers-component',
  templateUrl: './servers-component.component.html',
  styleUrls: ['./servers-component.component.css']
})
export class ServersComponentComponent implements OnInit {
servers:string[]=['1','2','3'];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotousers(){
    this.router.navigate(['/users/54'])

  }

  doqueryparam(s:string)
  {
     this.router.navigate(['/servers',s,'edit'],{queryParams:{allowedit:s},fragment:"qq",queryParamsHandling: 'preserve'});
  }
}
