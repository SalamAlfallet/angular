import { Component, OnInit } from '@angular/core';
import{DataServiceService} from '../data-service.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   constructor(private data1:DataServiceService) {
   
    }

    name_product="";
    price;
    quantity;

    data2=this.data1.data;
   x=2;
title:string="angualr 7";
number=10;
isactive=true;
data =[];
 arrayOfProduct=[];
   // {name:string,quan:number,price:number}
  
 
   
  
    
count =0;

  btnclick(){
    
   this.data.push("name"+this.count,this.count);
   this.count++;

    
  }
  submitclick(){
  // let x= document.getElementById('input1').value;
   //document.getElementById('pra').value=x;
   //x=" ";
    this.isactive=false;
 
     
   }
print =[];
   printvalue(e){

//console.log("key up event",e.target.value);
this.print.push(e.target.value);


   }

  
 
   addProduct(){
      let obj={name:this.name_product,price:this.price,quantity:this.quantity}
      this.arrayOfProduct.unshift(obj);
     
      
   

     }

   ctrM(){

console.log("click on ctr + m ")
   }
 
  ngOnInit() {

   console.log(this.data1.data);
  }

}
