import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface MockUser {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  private router = inject(Router);

  
  private mockUsers: MockUser[] = [
    { email: 'ning@gmail.com', password: 'ning123' },
    { email: 'admin@gmail.com', password: 'admin456' }
  ];

  login() {
    if (!this.email || !this.password) {
      alert('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }
    if (!this.validateEmail(this.email)) {
      alert('รูปแบบอีเมลไม่ถูกต้อง');
      return;
    }

    
    const valid = this.mockUsers.some(u =>
      u.email === this.email && u.password === this.password
    );

    if (!valid) {
      alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
      return;
    }

    
    localStorage.setItem('loggedIn', 'true');
    this.router.navigate(['/dashboard']);
  }

  private validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}
