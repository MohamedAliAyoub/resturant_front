export class Address {
  country: string;
  state: string;
  zipCode: string;

  constructor(country: string, state: string, zipCode: string) {
    this.country = country;
    this.state = state;
    this.zipCode = zipCode;
  }
}
