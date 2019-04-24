import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { CoinService } from '../../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

message: string = "Hola Mundo!";

@Output() messageEvent = new EventEmitter<string>();

title = 'Add Coin3';
title3variable = '';
coin_name = '';
coin_price = '';

@Input() title2variable:string;

angForm: FormGroup;
  constructor(private coinservice: CoinService,private fb: FormBuilder,private httpService: HttpClient,private _Activatedroute:ActivatedRoute) { 
  alert(this._Activatedroute.snapshot.params['title2variable']);
  this.title3variable = this._Activatedroute.snapshot.params['title2variable'];
  this.createForm();
  }
  arrCase : object [];
    Drugs : object [];
    staffingStatus : object [];
    
  createForm() {
    this.angForm = this.fb.group({
      coin_name: ['', Validators.required ],
      coin_price: ['', Validators.required ]
   });
  }
  
 
sendMessage() {
	alert("alert detected"+this.message);
    this.messageEvent.emit(this.message)
  }
  
addCoin(coin_name, coin_price) {
	alert("coin name-->"+coin_name);
	alert("coin price-->"+coin_price);
	 
      this.coinservice.addCoin(coin_name, coin_price);
  }
  ngOnInit() {

  this.httpService.get('./assets/Case.json').subscribe(
        data => {
          let res = data[0];    
          this.Drugs = res['Drugs']; 
          console.log(this.Drugs);

        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
      
      
      this.httpService.get('./assets/staffingStatus.json').subscribe(
        data => {
          let res = data[0];  
          this.staffingStatus = res['staffingStatus']; 
          console.log(this.staffingStatus);
          alert(this.staffingStatus.length);

        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
  }

}
