import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  print =[];
  printvalue(e){

    //console.log("key up event",e.target.value);
    this.print.push(e.value);
   e.target.value=" ";
    
    
       }

       agePrint(ele){
        this.print.push(ele.value);
        ele.value=" ";

       }
  constructor() { }

  ngOnInit() {
  }

}
