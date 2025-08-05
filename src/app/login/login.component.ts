import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']   // แก้เป็น styleUrls
})
export class LoginComponent {
  email = '';
  password = '';
  private router = inject(Router);

  login() {
    if (!this.email || !this.password) {
      alert('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }
    if (!this.validateEmail(this.email)) {
      alert('รูปแบบอีเมลไม่ถูกต้อง');
      return;
    }
    // ถ้าเช็คผ่าน ก็เซฟสถานะและไป Dashboard
    localStorage.setItem('loggedIn', 'true');
    this.router.navigate(['/dashboard']);
  }

  private validateEmail(email: string): boolean {
    // regex ง่ายๆ ตรวจ @ และ domain
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}
