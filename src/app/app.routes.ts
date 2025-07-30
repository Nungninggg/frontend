// app.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveRequestForComponent } from './leave-request-for/leave-request-for.component';
import { AbminComponent } from './abmin/abmin.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // ✅ ไม่มี /
    { path: 'dashboard', component: DashboardComponent },
    { path: 'leave-request-for', component: LeaveRequestForComponent },
    { path: 'admin', component: AbminComponent },
    { path: 'leavehistory', component: LeavehistoryComponent },
];
