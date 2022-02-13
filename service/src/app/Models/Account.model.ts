export class Account{
    ncp:string="";
    cha:string="";
    mon:number=0;
    cfn:string='O';

    constructor(ncpin:string,chain:string,monin:number,cfnin:string)
    {
          this.ncp=ncpin;
          this.cha=chain;
          this.mon=monin;
          this.cfn=cfnin;
    }
}