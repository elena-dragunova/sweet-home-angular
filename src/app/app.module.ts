import { BrowserModule } from '@angular/platform-browser';
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
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
