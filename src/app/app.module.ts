import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LogoComponent } from './components/logo/logo.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { AdvantagesSectionComponent } from './home/advantages-section/advantages-section.component';
import { BestSellersComponent } from './home/best-sellers/best-sellers.component';
import { BlogSectionComponent } from './home/blog-section/blog-section.component';
import { FollowUsSectionComponent } from './home/follow-us-section/follow-us-section.component';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { HomeComponent } from './home/home.component';
import { PromoCollectionComponent } from './home/promo-collection/promo-collection.component';
import { PromoSectionComponent } from './home/promo-section/promo-section.component';
import { SubscribeFormComponent } from './home/subscribe-form/subscribe-form.component';
import { SubscribeSectionComponent } from './home/subscribe-section/subscribe-section.component';
import { TrendingProductsComponent } from './home/trending-products/trending-products.component';
import { TruncatePipe } from './truncate.pipe';

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
    PromoSectionComponent,
    ButtonComponent,
    PromoCollectionComponent,
    PromoCollectionComponent,
    BestSellersComponent,
    SubscribeFormComponent,
    SubscribeSectionComponent,
    AdvantagesSectionComponent,
    FollowUsSectionComponent,
    BlogSectionComponent,
    ArticleCardComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
