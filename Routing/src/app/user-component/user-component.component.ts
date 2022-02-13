import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  constructor(private AR:ActivatedRoute) { }
  id:string='';
  ngOnInit(): void {
    this.id=this.AR.snapshot.params['id'];
  }

}
