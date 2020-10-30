import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    BannerComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
