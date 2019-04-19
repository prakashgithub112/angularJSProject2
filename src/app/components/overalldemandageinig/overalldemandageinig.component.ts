import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup,FormBuilder,  Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-overalldemandageinig',
  templateUrl: './overalldemandageinig.component.html',
  styleUrls: ['./overalldemandageinig.component.scss']
})
export class OverAllDemandAgeinigComponent implements OnInit {
angForm1: FormGroup;
  constructor(private fb: FormBuilder,private httpService: HttpClient) { }
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
