import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartService } from '../../cart.service';
import { Subscription } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit, OnDestroy {
  countries: string[] = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo, Democratic Republic of the',
    'Congo, Republic of the',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];

  checkoutForm!: FormGroup;

  cartItems: any[] = [];
  totalPrice: number = 0;
  vat: number = 0;
  shippingCost: number = 0;
  grandTotal: number = 0;
  totalQuantity: number = 0;
  private cartSubscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
  ) {}

  successMessage = false;

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      payment: ['e-money'],
      enum: [''],
      pin: [''],
    });

    this.updateValidators(this.checkoutForm.get('payment')!.value);

    this.checkoutForm.get('payment')!.valueChanges.subscribe((value) => {
      this.updateValidators(value);
    });

    this.cartSubscription = this.cartService.cart$.subscribe((cartItems) => {
      this.cartItems = cartItems;
      this.totalPrice = this.cartService.getTotalPrice();
      this.vat = this.cartService.getVat();
      this.shippingCost = this.cartService.getShippingCost();
      this.grandTotal = this.cartService.getGrandTotal();
      this.totalQuantity = this.cartService.getTotalQuantity();
    });
  }

  updateValidators(paymentType: string): void {
    const enumControl = this.checkoutForm.get('enum');
    const pinControl = this.checkoutForm.get('pin');

    if (paymentType === 'e-money') {
      enumControl!.setValidators([Validators.required]);
      pinControl!.setValidators([Validators.required]);
    } else {
      enumControl!.clearValidators();
      pinControl!.clearValidators();
    }

    enumControl!.updateValueAndValidity();
    pinControl!.updateValueAndValidity();
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  get name() {
    return this.checkoutForm.get('name');
  }

  get email() {
    return this.checkoutForm.get('email');
  }

  get phone() {
    return this.checkoutForm.get('phone');
  }

  get address() {
    return this.checkoutForm.get('address');
  }

  get zipCode() {
    return this.checkoutForm.get('zipCode');
  }

  get city() {
    return this.checkoutForm.get('city');
  }

  get country() {
    return this.checkoutForm.get('country');
  }

  get payment() {
    return this.checkoutForm.get('payment')?.value;
  }

  get enum() {
    return this.checkoutForm.get('enum');
  }

  get pin() {
    return this.checkoutForm.get('pin');
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      this.successMessage = true;
    }
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
