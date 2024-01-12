import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {StateCountryServiceService} from "../../service/state-country-service.service";
import {Country} from "../../model/country";
import {State} from "../../model/state";
import {SpaceValidator} from "../../model/space-validator";
import {CartServiceService} from "../../service/cart-service.service";
import {Item} from "../../model/item";
import {CartOrder} from "../../model/cart-order";
import {RequestOrder} from "../../model/request-order";

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
  totalSize: number = 0;
  totalPrice: number= 0;

  constructor(private formChildGroup: FormBuilder,
              private stateCountry: StateCountryServiceService,
              private card : CartServiceService) {
  }

  ngOnInit() {
    this.checkoutParentGroup = this.formChildGroup.group({
      data: this.formChildGroup.group({
        fullName: new FormControl('',[
          Validators.required,
          SpaceValidator.onlyContainSpace,
          Validators.minLength(6)]),
        email: new FormControl('',[
          Validators.required,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
        ]),
        phone: new FormControl('',[
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]*$')
        ])
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
    this.getTotals()
    // this.getAllStates()
  }

  get fullName(){
    return this.checkoutParentGroup.get('data.fullName')
  }
  get email(){
    return this.checkoutParentGroup.get('data.email')
  }
  get phone(){
    return this.checkoutParentGroup.get('data.phone')
  }

  done() {
    if (this.checkoutParentGroup.invalid) {
      this.checkoutParentGroup.markAllAsTouched()
    } else {
      /* #1 */
      let client = this.checkoutParentGroup.controls['data'].value;
      /* #2 */
      let fromAddress =  this.checkoutParentGroup.controls['fromPerson'].value;
      /* #3 */
      let toAddress =  this.checkoutParentGroup.controls['toPerson'].value;
      /* #4 */
      let requestOrder = new RequestOrder( this.totalPrice , this.totalSize);

      /* #5 */
      let items: Item[] = [];
      let orders: CartOrder[] = this.card.orders;
      for (let i=0;i<orders.length;i++){
        items[i] = new Item(orders[i]);
      }
    }
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

  getTotals(){
    this.card.totalOrders.subscribe(
      data => {
        this.totalSize = data
      }
    )
    this.card.totalPrice.subscribe(
      data => {
        this.totalPrice = data
      }
    )
  }
}
