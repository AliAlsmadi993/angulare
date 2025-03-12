import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbareComponent } from './navbare/navbare.component';
import { RegisterComponent } from './register/register.component';
import { CatigoryComponent } from './catigory/catigory.component';
import { DetalseComponent } from './detalse/detalse.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbareComponent,
    RegisterComponent,
    CatigoryComponent,
    DetalseComponent  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
     RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
