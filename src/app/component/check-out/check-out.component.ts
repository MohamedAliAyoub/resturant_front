import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StateCountryServiceService} from "../../service/state-country-service.service";
import {Country} from "../../model/country";
import {State} from "../../model/state";

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {

  checkoutParentGroup!: FormGroup;
  countries: Country[] = [];
  statesFromPerson: State[] = [];
  statesToPerson: State[] = [];

  constructor(private formChildGroup: FormBuilder,
              private stateCountry: StateCountryServiceService) {
  }

  ngOnInit() {
    this.checkoutParentGroup = this.formChildGroup.group({
      data: this.formChildGroup.group({
        fullName: [''],
        email: [''],
        phone: [''],
      }),
      fromPerson: this.formChildGroup.group({
        country: [''],
        state: [''],
        zipCode: [''],
      }),

      toPerson: this.formChildGroup.group({
        country: [''],
        state: [''],
        zipCode: [''],
      }),
      creditCard: this.formChildGroup.group({
        cardType: [''],
        cardNumber: [''],
        code: [''],
      }),
    })
    this.getAllCountries()
    // this.getAllStates()
  }

  done() {
    // @ts-ignore
    console.log(this.checkoutParentGroup.get('data').value)
    // @ts-ignore
    console.log(this.checkoutParentGroup.get('fromPerson').value)
    // @ts-ignore
    console.log(this.checkoutParentGroup.get('toPerson').value)
    // @ts-ignore
    console.log(this.checkoutParentGroup.get('creditCard.code').value)
  }


  similarGroup(event: Event) {
    if ((<HTMLInputElement>event.target).checked) {
      this.checkoutParentGroup.controls['toPerson']
        .setValue(this.checkoutParentGroup.controls['fromPerson'].value)
      this.statesToPerson = this.statesFromPerson

    } else {
      this.checkoutParentGroup.controls['toPerson'].reset()
    }
  }

  getAllCountries() {
    this.stateCountry.getAllCountry().subscribe(
      data => {
        this.countries = data
      }
    )
  }

  // getAllStates(){
  //   this.stateCountry.getAllState().subscribe(
  //     data=>{
  //       this.states = data ;
  //     }
  //   )
  // }

  getStatesByCode(typeForm : String){
    const  code = this.checkoutParentGroup.get(`${typeForm}.country`)?.value;
    this.stateCountry.getStateByCode(code).subscribe(
      data =>{
        if(typeForm === 'fromPerson'){
          this.statesFromPerson = data
        } else {
          this.statesToPerson = data
        }
        this.checkoutParentGroup.get(`${typeForm}.state`)?.setValue(data[0])
      }
    )
  }
}
