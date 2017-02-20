// Application Routing Module Created for Namvigation through Components 
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

//component of Application
import {AppliedJobsComponent} from "./components/applied-jobs/applied-jobs.component"
import {DashboardComponent} from "./components/dashboard/dashboard.component"
import {JobSearchComponent} from "./components/job-search/job-search.component"
import {PlacementHistoryComponent} from "./components/placement-history/placement-history.component"

const routes: Routes = [
    { path: '', redirectTo: '/components/dashboard/dashboard', pathMatch: 'full' },
    { path: 'components/dashboard/dashboard', component: DashboardComponent },
    { path: 'components/applied-jobs/applied-jobs', component: AppliedJobsComponent },
    { path: 'components/job-search/job-search', component:JobSearchComponent },
    { path: 'components/placement-history/placement-history', component: PlacementHistoryComponent }
];

@NgModule ({
imports:[ RouterModule.forRoot(routes) ],
exports:[RouterModule]
})
export class candidateRoutingModule {
}