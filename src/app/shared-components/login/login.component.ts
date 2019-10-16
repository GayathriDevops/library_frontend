import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  baseUrlLogin: string = 'http://10.117.189.102:7770';


  loginForm: FormGroup;
  loading = false;
  submitted = false;
  err = false;

  email: String;
  password: String;
  userId: number
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)]],
    });
  }
  // goto() {
  //   this.router.navigate(['/list']);
  // }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    console.log(this.loginForm.value);
    var reqObj1 = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    };

    this.http
      .post('http://10.117.189.102:7770/library/users/login', this.loginForm.value)
      .subscribe((res: Response) => {
        console.log(res);
        // alert(res['message'])
        sessionStorage.setItem("userId", res['userId']);
        this.router.navigate(['/list']);

      }, (err) => {
        this.err = true;
        console.log("rerror", err)
        // alert(err.message);
      });
  }
}
