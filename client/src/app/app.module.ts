import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ReportsComponent } from './reports/reports.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { NewreportComponent } from './newreport/newreport.component';
import { RegisterComponent } from './register/register.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './_modules/shared.module';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HighchartsChartModule } from 'highcharts-angular';
import { SpeedchartComponent } from './charts/speedchart/speedchart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    MemberListComponent,
    MemberDetailComponent,
    HomeComponent,
    CustomersComponent,
    ReportsComponent,
    IntegrationsComponent,
    NewreportComponent,
    RegisterComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    DashboardComponent,
    CardComponent,
    SpeedchartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    NgChartsModule,
    LayoutModule, 
    RouterModule,
    MatSidenavModule,
    HighchartsChartModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,useClass: ErrorInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
