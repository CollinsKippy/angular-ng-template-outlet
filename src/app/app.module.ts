import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyListingComponent } from './my-listing/my-listing.component';
import { MyTableComponent } from './my-table/my-table.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MyListingComponent,
    MyTableComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
