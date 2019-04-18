import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

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
  constructor(private coinservice: CoinService,private fb: FormBuilder) { 
  this.createForm();
  }
  
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
  }

}
