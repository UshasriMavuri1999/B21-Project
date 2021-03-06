import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddressFormComponent } from './pages/address-form/address-form.component';
import { ResponsePageComponent } from './pages/response-page/response-page.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { SafeHtmlPipe } from './safe-html.pipe';
@NgModule({
  declarations: [AppComponent, LoginFormComponent, ResponsePageComponent, AddressFormComponent, SafeHtmlPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
