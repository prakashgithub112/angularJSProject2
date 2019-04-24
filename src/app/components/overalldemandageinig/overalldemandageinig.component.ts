import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup,FormBuilder,  Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overalldemandageinig',
  templateUrl: './overalldemandageinig.component.html',
  styleUrls: ['./overalldemandageinig.component.scss']
})
export class OverAllDemandAgeinigComponent implements OnInit {
angForm1: FormGroup;
title3variable = '';
  constructor(private fb: FormBuilder,private httpService: HttpClient,private _Activatedroute:ActivatedRoute) { 
  alert("Inside overalldemandagainig=="+ this._Activatedroute.snapshot.params['title2variable']);
  this.title3variable = this._Activatedroute.snapshot.params['title2variable'];
  }
  accountName : object [];
  
  ngOnInit() {

    this.httpService.get('./assets/accountName.json').subscribe(
        data => {

          let res = data[0];    
          this.accountName = res['accountName']; 

          console.log(this.accountName);

        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
  }

}
