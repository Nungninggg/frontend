import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveRequestForComponent } from './leave-request-for/leave-request-for.component';
import { AbminComponent } from './abmin/abmin.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,   
    RouterOutlet,
    RouterModule,
    DashboardComponent,
    LeaveRequestForComponent,
    AbminComponent,
    LeavehistoryComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
