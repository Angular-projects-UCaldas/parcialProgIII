import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    NavbarComponent, 
    FooterComponent, 
    HeroComponent, 
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
  ]
})
export class TemplatesModule { }
