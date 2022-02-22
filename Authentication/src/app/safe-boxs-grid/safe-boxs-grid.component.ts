import { Component, Input, OnInit } from '@angular/core';
import { SafeBox } from '../Models/SafeBox.model';
import { SafeBoxsService } from '../services/SafeBoxs.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-safe-boxs-grid',
  templateUrl: './safe-boxs-grid.component.html',
  styleUrls: ['./safe-boxs-grid.component.css']
})
export class SafeBoxsGridComponent implements OnInit {
  @Input() Branch='';
  filter:string='';
  public show = true;

  SafeBoxes:SafeBox[]=[];
  SafeBoxesCopy:SafeBox[]=[];
  constructor(private AR:ActivatedRoute,private SafeBoxService:SafeBoxsService) { }

  ngOnInit(): void {
    console.log('Recived Branch '+this.AR.snapshot.params['Branch'])
    console.log(this.SafeBoxService.GetBranchSafeBoxes(this.AR.snapshot.params['Branch']));
    this.SafeBoxes=this.SafeBoxService.GetBranchSafeBoxes(this.AR.snapshot.params['Branch']);

    for (var i = 0; i < this.SafeBoxes.length; i++) {
      this.SafeBoxesCopy[i] = this.SafeBoxes[i];
    }


    
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
