import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewLeadsSerService } from 'src/app/Service/NewLeadsService/new-leads-ser.service';
import { ApiServiceService } from 'src/app/Service/api-service.service';




@Component({
  selector: 'app-todays-event',
  templateUrl: './todays-event.component.html',
	styleUrls: ['./todays-event.component.css']
})
export class TodaysEventComponent {

    constructor(private formBuilder: FormBuilder,private newLeadservice:NewLeadsSerService,
		private apiServiceService:ApiServiceService,private http: HttpClient){}
	msg: String | undefined;
	errorMsg: String | undefined;
	wishForm!: FormGroup;
	wishForm1!: FormGroup;
	subject:String='';
	body:String='';
	emails:String[]=[];
	count:Number=0;
	get valid(){ return this.wishForm.controls;}
	ngOnInit(): void {
		this.wishForm = this.formBuilder.group({
	
		  subject: new FormControl(''),
		  body:new FormControl(''),
		});
		this.apiServiceService.getCount().subscribe(
			count => {
				this.count = count;
			}
		);
		
	  }
	 

	  public Send_wishes(subject:String,body:String){
		this.displayForm1 = true;
		document.body.style.overflow = 'hidden';
		console.log(subject);
		this.apiServiceService.SendMessage(subject,body).subscribe
		(
			(data) => {
				this.msg = data;
             	this.errorMsg = undefined;
			},
			(error) => {
				this.msg = undefined;
				this.errorMsg = error.error + " ";
				}

		);
		
	  }
	  
	 
	


	displayForm: boolean = false;
	displayMessage: boolean = false;
	
	displayForm1: boolean = false;
	
	
	openForm() {
	  this.displayForm = true;
	  document.body.style.overflow = 'hidden';
	  this.apiServiceService.getEmail().subscribe(
		(data) => {
			this. emails = data;
			this.errorMsg = undefined;
		  },
		  (error) => {
			this.msg = undefined;
			this.errorMsg = error.error;
		  }
	  );
	}
  
	closeForm() {
	  this.displayForm = false;
	  this.displayForm1=false;
	  document.body.style.overflow = 'auto';
	}
  
	closeMessage() {
	  this.displayMessage = false;
	  document.body.style.overflow = 'auto';
	}
  
	onSubmit() {
	  this.displayForm = false;
	  this.displayMessage = true;
	  document.body.style.overflow = 'hidden';
	  
	}
	
	
	
		
		
	
	
		
	  
	   
}
