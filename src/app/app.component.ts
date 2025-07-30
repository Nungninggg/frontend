import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveRequestForComponent } from './leave-request-for/leave-request-for.component';
import { AbminComponent } from './abmin/abmin.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent,RouterModule,LeaveRequestForComponent,AbminComponent, LeavehistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
