import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CatalogComponent} from './catalog/catalog.component';
import {BlogComponent} from './blog/blog.component';
import {ContactsComponent} from './contacts/contacts.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'catalog', component: CatalogComponent, children: [
      { path: ':category', component: CatalogComponent, children: [
          { path: ':subcategory', component: CatalogComponent },
        ]
      },
    ]
  },
  { path: 'blog', component: BlogComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
