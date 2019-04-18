import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {
title = 'Add Coin3';
coin_name = '';
coin_price = '';
angForm: FormGroup;
  constructor(private coinservice: CoinService,private fb: FormBuilder,private httpService: HttpClient) { 
  this.createForm();
  }
  arrCase : object [];
    Drugs : object [];
  createForm() {
    this.angForm = this.fb.group({
      coin_name: ['', Validators.required ],
      coin_price: ['', Validators.required ]
   });
  }
  
 

addCoin(coin_name, coin_price) {
	alert("coin name-->"+coin_name);
	alert("coin price-->"+coin_price);
      this.coinservice.addCoin(coin_name, coin_price);
  }
  ngOnInit() {
  alert("Inside ngoniit");
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
  }

}
