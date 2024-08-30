import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Leads } from 'src/app/Model/leads';
import { NewLeadsSerService } from 'src/app/Service/NewLeadsService/new-leads-ser.service';

@Component({
  selector: 'app-customer-from',
  templateUrl: './customer-from.component.html',
  styleUrls: ['./customer-from.component.css']
})
export class CustomerFromComponent {
  AllFormData = {}
  personalDetailsForm!: FormGroup;
  incomedetailsForm!: FormGroup;
  documentsForm!: FormGroup;
  quotationForm!: FormGroup;
  viewleads: any
  isLinear = false;
  leads: Leads = new Leads();
  msg: String | undefined;
  errorMsg: String | undefined;
  constructor(private formBuilder: FormBuilder, private NewLeadService: NewLeadsSerService, private router: Router) { }

  get valid() { return this.personalDetailsForm.controls; }
  get validi() { return this.incomedetailsForm.controls; }
  get validd() { return this.documentsForm.controls; }
  get validq() { return this.quotationForm.controls; }
  todayDate: string | undefined;
  currentDate: Date = new Date();
  ngOnInit(): void {

    this.todayDate = new Date().toISOString().substring(0, 10);
    setInterval(() => {
      this.currentDate = new Date();
    }, 60000);

    this.personalDetailsForm = this.formBuilder.group({

      lastName: this.formBuilder.control('', [Validators.required, Validators.maxLength(50)]),
      phoneNumber: this.formBuilder.control('', [Validators.required, Validators.pattern(/^\+\d{2}-\d{10}$/)]),
      emailAddress: this.formBuilder.control('', [Validators.required, Validators.maxLength(50), Validators.pattern('[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$')]),
      dateOfBirth: this.formBuilder.control('', [Validators.required,this.minAgeValidator]),
      pincode: this.formBuilder.control('', Validators.required),
      gender: this.formBuilder.control('', Validators.required),
      firstName: this.formBuilder.control('', [Validators.required, Validators.maxLength(50)]),
      address: this.formBuilder.control('', Validators.required),
      smokeDetails: this.formBuilder.control('', Validators.required),
      alcoholDetails: this.formBuilder.control('', Validators.required),
      dateOfContact: this.formBuilder.control('',Validators.required)
    }),
      this.incomedetailsForm = this.formBuilder.group({
        annualIncome: this.formBuilder.control('', [ Validators.required,this.validateCurrentYearValidator]),
        governmentRebate: this.formBuilder.control('', Validators.required),
        taxRebate: this.formBuilder.control('', Validators.required),

      }),
      this.documentsForm = this.formBuilder.group({

        identityProof: this.formBuilder.control('', Validators.required),
        financialProof: this.formBuilder.control('', Validators.required)
      }),
      this.quotationForm = this.formBuilder.group({

      });
      
  }
 
  minAgeValidator(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    const minAgeDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

    if (selectedDate > minAgeDate) {
      return { minAge: true };
    }
    return null;
  }
  validateCurrentYearValidator(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    const currentYear = today.getFullYear();

    if (selectedDate.getFullYear() !== currentYear) {
      return { invalidYear: true };
    }

    return null;
  }


  addPersonalDetails() {

    this.AllFormData = Object.assign(this.AllFormData, this.personalDetailsForm.value);

    console.log(this.AllFormData = Object.assign(this.AllFormData, this.personalDetailsForm.value));
  }

  addIncomeDetails() {

    this.AllFormData = Object.assign(this.AllFormData, this.incomedetailsForm.value);
    console.log(this.AllFormData);

  }
  addDocuments() {
    this.AllFormData = Object.assign(this.AllFormData, this.documentsForm.value);
    console.log(this.AllFormData);


  }
  addQuotation() {

    this.AllFormData = Object.assign(this.AllFormData, this.quotationForm.value);
    console.log(this.AllFormData);
    this.NewLeadService.addNewLeads(this.AllFormData).subscribe(
      (data) => {
        console.log(" data " + data);
        this.msg = data;
        this.errorMsg = undefined;
      },
      (error) => {
        console.log("error" + error.error)
        this.msg = undefined;
        this.errorMsg = error.error + " ";
      }
    );
  }

}
