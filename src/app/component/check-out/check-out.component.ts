import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {

  checkoutParentGroup!: FormGroup;
  constructor(private formChildGroup : FormBuilder) {
  }

  ngOnInit(){
    this.checkoutParentGroup = this.formChildGroup.group({
      data : this.formChildGroup.group({
        fullName : [''],
        email : [''],
        phone : [''],
      }),
      formPerson : this.formChildGroup.group({
        country : ['Egypt'],
        state : ['Fayoum'],
        zip : ['464'],
      })
    })
  }
}
