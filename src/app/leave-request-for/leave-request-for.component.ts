import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leave-request-for',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpClientModule],
  templateUrl: './leave-request-for.component.html',
  styleUrl: './leave-request-for.component.css'
})
export class LeaveRequestForComponent {
  leaveRequest = {
    userId: 3,
    leaveTypeId: 0,
    startDate: '',
    endDate: '',
    reason: ''
  };

  constructor(private http: HttpClient) {}

  submitRequest() {
    if (!this.leaveRequest.leaveTypeId || !this.leaveRequest.startDate || !this.leaveRequest.endDate) {
      alert('กรุณากรอกข้อมูลให้ครบ');
      return;
    }

    this.http.post('http://localhost:8013/api/leave_requests', this.leaveRequest)
      .subscribe({
        next: (res: any) => alert('บันทึกสำเร็จ ID: ' + res.id),
        error: (err: any) => {
          console.error(err);
          alert('เกิดข้อผิดพลาด');
        }
      });
  }
}


