import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonFixedComponent } from './presentation/components/@standalone/button-fixed/button-fixed.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from './presentation/pages/pages.module';
import { ComponentModule } from './presentation/components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ComponentModule,
    PagesModule,
    ButtonFixedComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
