import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from 'app/shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: MATERIAL_COMPATIBILITY_MODE,
      useValue: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
