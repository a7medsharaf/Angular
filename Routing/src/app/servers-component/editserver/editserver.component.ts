import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editserver',
  templateUrl: './editserver.component.html',
  styleUrls: ['./editserver.component.css']
})
export class EditserverComponent implements OnInit {
activeserver:string='';
  constructor(private AR:ActivatedRoute) { }

  ngOnInit(): void {


    //subscribe to changing the param and reload the whole state when refreshed
    this.AR.params.subscribe(params => {
      this.activeserver = params['id'];
     
  });


   // this.activeserver=this.AR.snapshot.params['id'];
    console.log(this.AR.snapshot.queryParams);
    console.log(this.AR.snapshot.fragment);
  }

}
