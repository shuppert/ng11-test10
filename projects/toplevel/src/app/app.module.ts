import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
