import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OverlayModule } from '@angular/cdk/overlay';


import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    AutocompleteModule
  ],
  providers: [],
  entryComponents:[AutocompleteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
