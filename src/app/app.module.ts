import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// for Routing importing one module
import {candidateRoutingModule} from './apps-routing.module'
import { AppComponent } from './app.component';
import { AppliedJobsComponent } from './components/applied-jobs/applied-jobs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { PlacementHistoryComponent } from './components/placement-history/placement-history.component';
import { MaterialModule } from '@angular/material';
import {candidateService} from './services/candidate.service'
import 'hammerjs'

@NgModule({
  declarations: [
    AppComponent,
    AppliedJobsComponent,
    DashboardComponent,
    JobSearchComponent,
    PlacementHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    candidateRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [candidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
