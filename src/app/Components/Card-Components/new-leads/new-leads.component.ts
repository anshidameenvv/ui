import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Leads } from 'src/app/Model/leads';
import { NewLeadsSerService } from 'src/app/Service/NewLeadsService/new-leads-ser.service';

@Component({
  selector: 'app-new-leads',
  templateUrl: './new-leads.component.html',
  styleUrls: ['./new-leads.component.css']
})
export class NewLeadsComponent implements OnInit{
  leads:Leads[]=[];
  
  constructor(private formBuilder: FormBuilder, private NewLeadService: NewLeadsSerService, private router: Router) { }
  ngOnInit(): void {
   
    this.NewLeadService.getAllCustomers().subscribe(

      (data) => {
        this. leads = data;
        this.errorMsg = undefined;
      },
      (error) => {
        this.msg = undefined;
        this.errorMsg = error.error;
      }
    );
  }
  query:any="";
  msg: String | undefined;
  errorMsg: String | undefined;

 

  
}
