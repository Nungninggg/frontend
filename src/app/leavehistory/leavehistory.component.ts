import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms'; 
import * as echarts from 'echarts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leavehistory',
  standalone: true,
  imports: [NgxEchartsModule, FormsModule, CommonModule], 
  templateUrl: './leavehistory.component.html',
  styleUrls: ['./leavehistory.component.css']
})
export class LeavehistoryComponent {
  selectedMonth = '';
  selectedDepartment = 'ทั้งหมด';
  departments = ['HR', 'IT', 'บัญชี']; // ตัวอย่างข้อมูล

  leaveRecords = [
    { name: 'สมชาย ใจดี', department: 'IT', sickLeave: 2, vacationLeave: 1, personalLeave: 1, total: 4 },
    { name: 'สมหญิง น่ารัก', department: 'HR', sickLeave: 1, vacationLeave: 2, personalLeave: 0, total: 3 },
    // เพิ่มข้อมูลเพิ่มเติม
  ];

  get filteredLeaveRecords() {
    if (this.selectedDepartment === 'ทั้งหมด') return this.leaveRecords;
    return this.leaveRecords.filter(record => record.department === this.selectedDepartment);
  }

  chartOptions = {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    xAxis: { type: 'category', data: ['ลาป่วย', 'ลาพักร้อน', 'ลากิจ'] },
    yAxis: { type: 'value' },
    series: [
      {
        name: 'จำนวนวัน',
        type: 'bar',
        data: [45, 30, 15], // ดึงจาก leaveRecords ได้ในอนาคต
        itemStyle: { color: '#4A90E2' }
      }
    ]
  };

  exportExcel() {
    console.log('Export Excel Clicked'); // ลองแสดงก่อน
  }
  updateChartData() {
  const records = this.filteredLeaveRecords;
  const sick = records.reduce((sum, r) => sum + r.sickLeave, 0);
  const vacation = records.reduce((sum, r) => sum + r.vacationLeave, 0);
  const personal = records.reduce((sum, r) => sum + r.personalLeave, 0);

  this.chartOptions = {
    ...this.chartOptions,
    series: [{
      ...this.chartOptions.series[0],
      data: [sick, vacation, personal]
    }]
  };
}

}
