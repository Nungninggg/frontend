import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule,],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private router = inject(Router);
  private http = inject(HttpClient);

  leaveRequests: any[] = [];

  ngOnInit(): void {

    if (localStorage.getItem('loggedIn') !== 'true') {
      this.router.navigate(['/login']);
      return;
    }


    this.http
      .get<any[]>('http://localhost:8013/api/leave_requests')
      .subscribe(res => {
        this.leaveRequests = res.map(request => ({
          ...request,
          days: this.calculateDays(request.startDate, request.endDate)
        }));
      });
  }

  calculateDays(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  }

  get pendingCount(): number {
    return this.leaveRequests.filter(r => r.status?.toUpperCase() === 'PENDING').length;
  }

  get totalLeaveDays(): number {
    return this.leaveRequests.reduce((sum, r) => sum + r.days, 0);
  }

  get recentRequests(): any[] {
    return this.leaveRequests.slice(0, 5);
  }

  getStatusLabel(status: string): string {
    switch (status?.toUpperCase()) {
      case 'PENDING': return 'รออนุมัติ';
      case 'APPROVED': return 'อนุมัติแล้ว';
      case 'DENIED': return 'ไม่อนุมัติ';
      default: return status;
    }
  }
}

