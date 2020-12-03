import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { CartDrawerComponent } from './cart-drawer/cart-drawer.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BadgeComponent } from './components/badge/badge.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LogoComponent } from './components/logo/logo.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { HomeComponent } from './home/home.component';
import { TrendingProductsComponent } from './home/trending-products/trending-products.component';

/**
 * Main root module.
 */
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
    TrendingProductsComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
