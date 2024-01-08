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
        country : [''],
        state : [''],
        zipCode : [''],
      }),

      toPerson : this.formChildGroup.group({
        country : [''],
        state : [''],
        zipCode : [''],
      }),
      creditCard : this.formChildGroup.group({
        cardType : [''],
        cardNumber : [''],
        code : [''],
      }),
    })
  }

  done() {
    // @ts-ignore
    console.log(this.checkoutParentGroup.get('data').value)
    // @ts-ignore
    console.log(this.checkoutParentGroup.get('formPerson').value)
    // @ts-ignore
    console.log(this.checkoutParentGroup.get('toPerson').value)
    // @ts-ignore
    console.log(this.checkoutParentGroup.get('creditCard.code').value)
  }


  similarGroup(event: Event) {
    if((<HTMLInputElement>event.target).checked){
      this.checkoutParentGroup.controls['toPerson']
        .setValue(this.checkoutParentGroup.controls['formPerson'].value)
    } else {
      this.checkoutParentGroup.controls['toPerson'].reset()
    }
  }
}
