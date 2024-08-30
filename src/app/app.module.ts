import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewLeadsComponent } from './Components/Card-Components/new-leads/new-leads.component';
import { AllApplicantsComponent } from './Components/all-applicants/all-applicants.component';
import { AllSalesComponent } from './Components/all-sales/all-sales.component';
import { TodayScheduleComponent } from './Components/today-schedule/today-schedule.component';
import { TopsellingproductsComponent } from './Components/topsellingproducts/topsellingproducts.component';
import { MainComponent } from './Dashboard/main/main.component';
import { SideNavbarComponent } from './Dashboard/side-navbar/side-navbar.component';
import { UpperNavbarComponent } from './Dashboard/upper-navbar/upper-navbar.component';
import { InnerDashBoardComponent } from './Inner/inner-dash-board/inner-dash-board.component';
import { AppRoutingModule } from './app-routing.module';
import { EventComponent } from './Inner/event/event.component';
import { TodaysEventComponent } from './Components/todays-event/todays-event.component';
import { RenewalComponent } from './Components/Card-Components/renewal/renewal.component';
import { ExpiredComponent } from './Components/Card-Components/expired/expired.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; //
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomerFromComponent } from './Components/Card-Components/customer-from/customer-from.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { QuotationSummaryComponent } from './Components/Card-Components/quotation-summary/quotation-summary.component';
import { PayNowComponent } from './Components/Card-Components/pay-now/pay-now.component';





@NgModule({
  declarations: [
    AppComponent,
    UpperNavbarComponent,
    SideNavbarComponent,
    InnerDashBoardComponent,
    MainComponent,
    TopsellingproductsComponent,
    AllApplicantsComponent,
    TodayScheduleComponent,
    AllSalesComponent,
    TodaysEventComponent,
    NewLeadsComponent,
    EventComponent,
    RenewalComponent,
    ExpiredComponent,
    CustomerFromComponent,
    QuotationSummaryComponent,
    PayNowComponent,
  
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    FontAwesomeModule,
    MatProgressBarModule,
    MatCardModule,
    MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
