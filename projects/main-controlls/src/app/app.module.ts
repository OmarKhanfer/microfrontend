import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import { SharedFooterComponent } from './components/shared-footer/shared-footer.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedHeaderComponent,
    SharedFooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    SharedHeaderComponent,
    SharedFooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
