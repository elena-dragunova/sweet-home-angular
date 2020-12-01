import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeComponent } from './components/badge/badge.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { LogoComponent } from './components/logo/logo.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { CartDrawerComponent } from './cart-drawer/cart-drawer.component';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    BlogComponent,
    ContactsComponent,
    CartComponent,
    HeaderComponent,
    BadgeComponent,
    SocialIconsComponent,
    LogoComponent,
    DropdownComponent,
    MainMenuComponent,
    FooterComponent,
    CartDrawerComponent,
    HomeCarouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
