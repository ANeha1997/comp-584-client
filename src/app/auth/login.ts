import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth-service';
import { LoginRequest } from './login-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
 
  form!: UntypedFormGroup;
  constructor(private authService: AuthService, private router: Router) { 

  }
  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('',  Validators.required)
    });
  }
  onSubmit(): void {
    let loginRequest = <LoginRequest>{
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value
    };
   this.authService.login(loginRequest).subscribe({
    next: result => {
      console.log('Login successful', result);
      this.router.navigate(['/']);
    },
    error: result => {
      console.error('Login failed', result);
    }
   })
   
  }

}
