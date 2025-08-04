import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ เพิ่ม FormsModule
import { Router } from '@angular/router';     // ✅ สำหรับ navigate

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
  if (this.username && this.password) {
    localStorage.setItem('loggedIn', 'true');
    this.router.navigate(['/dashboard']);
  } else {
    alert('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
  }
}
}

