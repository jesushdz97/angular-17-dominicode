import { NgModule } from '@angular/core';
import { AngularLogoComponent } from './angular-logo/angular-logo.component';
import { CartLogoComponent } from './cart-logo/cart-logo.component';

@NgModule({
  imports: [AngularLogoComponent, CartLogoComponent],
  exports: [AngularLogoComponent, CartLogoComponent]
})
export class SvgModule { }
