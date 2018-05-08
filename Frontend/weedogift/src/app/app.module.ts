import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CalculatorService } from './calculator.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
