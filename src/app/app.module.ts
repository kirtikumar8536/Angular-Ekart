import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
 import { FormsModule } from '@angular/forms';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ContainerComponent, SearchComponent, MainMenuComponent, TopHeaderComponent, ProductListComponent, ProductComponent, FilterComponent],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
