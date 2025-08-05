import { Component, OnInit, inject } from '@angular/core';
import { CommonModule }              from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-leavehistory',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule   // สำหรับ HttpClient
  ],
  templateUrl: './leavehistory.component.html',
  styleUrls: ['./leavehistory.component.css']  // เพิ่ม s
})
export class LeavehistoryComponent implements OnInit {
  private http = inject(HttpClient);

  // เก็บประวัติการลา
  history: Array<{
    name: string;
    department: string;
    sick: number;
    vacation: number;
    personal: number;
    total: number;
    dateRequested: string;
  }> = [];

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory() {
    this.http
      .get<any[]>('http://localhost:8013/api/leavehistory')
      .subscribe(res => {
        this.history = res.map(item => ({
          ...item,
          total: (item.sick||0) + (item.vacation||0) + (item.personal||0)
        }));
      });
  }
}
