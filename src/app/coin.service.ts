import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Injectable()
export class CoinService {

  constructor(private http: HttpClient) { }

  addCoin(coin_name, coin_price) {
  	alert("Adding coin data to local storage");
  	
  	const obj = {
      coin_name: coin_name,
      coin_price: coin_price
    };
    
  	//window.localStorage.set("saved_coin_data", JSON.stringify(obj));
  	localStorage.setItem("item", JSON.stringify(obj));
    alert("Adding coin data done");
     
  }
}