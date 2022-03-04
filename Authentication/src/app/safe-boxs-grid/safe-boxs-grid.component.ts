import { Component, Input, OnInit } from '@angular/core';
import { SafeBox } from '../Models/SafeBox.model';
import { SafeBoxsService } from '../services/SafeBoxs.service';
import { ActivatedRoute } from '@angular/router';
import { UsersAdmin } from '../services/UsersAdmin.service';
import { User } from '../Models/User.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-safe-boxs-grid',
  templateUrl: './safe-boxs-grid.component.html',
  styleUrls: ['./safe-boxs-grid.component.css']
})
export class SafeBoxsGridComponent implements OnInit {
  @Input() Branch='';
  filter:string='';
  public show = true;
  Loggedinuser:User=new User();
  Sub:Subscription=new Subscription;;

  SafeBoxes:SafeBox[]=[];
  SafeBoxesCopy:SafeBox[]=[];
  constructor(private AR:ActivatedRoute,private SafeBoxService:SafeBoxsService,private UA:UsersAdmin) { this.SafeBoxes=[]}

  ngOnInit(): void {
    this.Sub.add(this.UA.Usersubject.subscribe(res=>this.Loggedinuser=res));


    this.SafeBoxService.GetBranchSafeBoxes(this.Loggedinuser.Branch)
    .subscribe(
      response=>{
        console.log("response");
        console.log(response);
         for(const key in response)
         {
                if(response[key].holdingBranch===this.Loggedinuser.Branch)
                 this.SafeBoxes.push(response[key]);
         }
         this.SafeBoxesCopy=[];
         for (var i = 0; i < this.SafeBoxes.length; i++) {
          this.SafeBoxesCopy[i] = this.SafeBoxes[i];
        }
      }
     
  );
  console.log(this.SafeBoxes);
    

    console.log(this.SafeBoxesCopy);
    
  }

  onedit(s:string)
  {
    alert("Pressed "+s);
  }

  onfilter(s:any)
  {
    let s1:SafeBox;
    this.SafeBoxesCopy=[];

    

    if(s.target.value.trim()!='')
    {
      this.SafeBoxes.forEach((e)=>{
        if(e.No.includes(s.target.value.trim()))
        {
            s1=new SafeBox();
            s1=e;
            this.SafeBoxesCopy.push(s1);
        }
    })

    }
    else
    {
      for (var i = 0; i < this.SafeBoxes.length; i++) {
        this.SafeBoxesCopy[i] = this.SafeBoxes[i];
      }
    }
   // this.reload();
  }

  reload() {
    this.show = false;
    setTimeout(() => this.show = true);
  }

  

}
