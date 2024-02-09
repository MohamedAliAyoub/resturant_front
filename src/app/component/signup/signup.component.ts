import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationServiceService} from "../../service/security/authentication-service.service";
import {Router} from "@angular/router";
import {SpaceValidator} from "../../model/space-validator";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  checkoutParentGroup!: FormGroup;

  constructor(private formChildGroup: FormBuilder,
              private auth: AuthenticationServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.myFormLogin()
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
    })
  }

  signup() {
    alert(this.checkoutParentGroup.controls['user'].value.email)
    alert(this.checkoutParentGroup.controls['user'].value.password)
  }

  done() {
    this.auth.createUser(
      this.checkoutParentGroup.controls['user'].value.email,
      this.checkoutParentGroup.controls['user'].value.password
    ).subscribe({
      next: response => {
        this.router.navigateByUrl("/login")
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
