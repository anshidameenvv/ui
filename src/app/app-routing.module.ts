import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnerDashBoardComponent } from './Inner/inner-dash-board/inner-dash-board.component';
import { NewLeadsComponent } from './Components/Card-Components/new-leads/new-leads.component';

import { EventComponent } from './Inner/event/event.component';
import { MainComponent } from './Dashboard/main/main.component';
import { ExpiredComponent } from './Components/Card-Components/expired/expired.component';
import { CustomerFromComponent } from './Components/Card-Components/customer-from/customer-from.component';
import { RenewalComponent } from './Components/Card-Components/renewal/renewal.component';
import { PayNowComponent } from './Components/Card-Components/pay-now/pay-now.component';

const routes: Routes = [
  { path: 'dashboard', component: InnerDashBoardComponent  },
  {path:'newleads',component:NewLeadsComponent},
  {path:'wishsent',component: EventComponent},
  {path:'wishsent1',component:MainComponent},
  {path:'expired',component:ExpiredComponent},
  {path:'customerForm',component:CustomerFromComponent},
  {path:'renewal',component:RenewalComponent},
  {path:'expired',component:ExpiredComponent},
  {path:'paynow',component:PayNowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
