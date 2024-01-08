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
    const fullName = this.checkoutParentGroup.get('data.fullName');
    const fromCountry = this.checkoutParentGroup.get('fromPerson.country');
    const toCountry = this.checkoutParentGroup.get('toPerson.country');
    const creditCardCode = this.checkoutParentGroup.get('creditCard.code');

    if (fullName && fromCountry && toCountry && creditCardCode) {
      console.log(fullName.value);
      console.log(fromCountry.value);
      console.log(toCountry.value);
      console.log(creditCardCode.value);
    }
  }


  similarGroup(event: Event) {
    if((<HTMLInputElement>event.target).checked){
      this.checkoutParentGroup.controls['toPerson']
        .setValue(this.checkoutParentGroup.controls['fromPerson'].value)
    } else {
      this.checkoutParentGroup.controls['toPerson'].reset()
    }
  }
}
