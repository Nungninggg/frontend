import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-abmin',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './abmin.component.html',
  styleUrl: './abmin.component.css'
})
export class AbminComponent {
  constructor(private http: HttpClient) {}

  leaveRequests: any[] = [];

  TypeName = [
    { id: 1, name: 'ลาป่วย' },
    { id: 2, name: 'ลาพักร้อน' },
    { id: 3, name: 'ลากิจ' },
  ];

 Requests() {
  this.http.get<any[]>('http://localhost:8013/api/leave_requests').subscribe((res) => {
    console.log('API result:', res); // เช็กดูข้อมูลที่ได้

    this.leaveRequests = res
      .filter((request: any) => request.status?.toLowerCase() === 'pending')
      .map((request: any) => ({
        id: request.id,
        name: request.userName || 'ไม่ระบุชื่อ',
        department: request.department || 'ไม่ระบุแผนก',
        leaveType: request.leaveTypeName || 'ไม่ระบุประเภท',
        days: this.calculateDays(request.startDate, request.endDate),
        startDate: request.startDate,
        endDate: request.endDate,
        reason: request.reason || '',
        status: request.status,
        comment: '' 
      }));
  });
}

calculateDays(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  return diffDays;
}


  updateStatus(id: number, status: string) {
    const request = this.leaveRequests.find((r: any) => r.id === id);
    const payload = {
      status: status,
      comment: request?.comment || ''
    };

    this.http.put(
  `http://localhost:8013/api/leave_requests/${id}?status=${status}&comment=${encodeURIComponent(payload.comment)}`,
  {} // ส่ง body ว่าง เพราะส่งข้อมูลผ่าน query
).subscribe(
  res => {
    this.Requests();
    alert('อัปเดตสถานะเรียบร้อย ' + status);
  },
  err => {
    alert('เกิดข้อผิดพลาด ' + err.message);
  }
);

  }

  approve(id: number) {
    this.updateStatus(id, 'APPROVED');
  }

  deny(id: number) {
    this.updateStatus(id, 'DENIED');
  }

  ngOnInit(): void {
    this.Requests();
  }
}
