import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationServiceService} from "../../service/security/authentication-service.service";
import {Router} from "@angular/router";
import {SpaceValidator} from "../../model/space-validator";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ,
    '../../../assets/css/login-signup.css']
})
export class LoginComponent implements OnInit {
  checkoutParentGroup!: FormGroup;

  constructor(private formChildGroup: FormBuilder,
              private auth :AuthenticationServiceService,
              private router: Router) { }
  ngOnInit(): void {
    this.myFormLogin();
  }

  myFormLogin() {
    this.checkoutParentGroup = this.formChildGroup.group({
      user: this.formChildGroup.group({
        email: new FormControl('',[
          Validators.required,
          SpaceValidator.onlyContainSpace,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
        ]),
        password: new FormControl('',[
          Validators.required
        ])
      })
    });
  }

  login() {
    if(this.checkoutParentGroup.invalid){
      this.checkoutParentGroup.markAllAsTouched()
      return;
    }
    this.auth.executeAuthentication(
      this.checkoutParentGroup.controls['user'].value.email,
      this.checkoutParentGroup.controls['user'].value.password
    ).subscribe({
      next: response =>{
        this.router.navigateByUrl("/orders")
      },
      error: er=> {
        console.log(er)
        alert("invalid email or password")

      }
    })
  }


  get email(){
    return this.checkoutParentGroup.get('user.email')
  }
  get password(){
    return this.checkoutParentGroup.get('user.password')
  }
}