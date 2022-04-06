import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ReportsComponent } from './reports/reports.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { NewreportComponent } from './newreport/newreport.component';
import { AuthGuard } from './_guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
  path: '',
  runGuardsAndResolvers: 'always',
  canActivate: [AuthGuard],
  children: [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'integrations', component: IntegrationsComponent},
  {path: 'newreport', component: NewreportComponent},
  ]},
  {path: 'errors', component: TestErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component:ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }