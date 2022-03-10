import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ReportsComponent } from './reports/reports.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { NewreportComponent } from './newreport/newreport.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'members', component: MemberListComponent},
  {path: 'members/:id', component: MemberDetailComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'integration', component: IntegrationsComponent},
  {path: 'newreport', component: NewreportComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }