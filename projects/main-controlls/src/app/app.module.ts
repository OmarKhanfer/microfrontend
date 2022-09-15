import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
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
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    SharedHeaderComponent,
    SharedFooterComponent
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
