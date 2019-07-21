import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ToolbarOverviewComponent } from './toolbar-overview/toolbar.component';
import { MenuOverviewComponent } from './main-menu/main-menu.component';
import { CapRateCardComponent } from './calculator-card/cap-rate-component/caprate-card';
import { CapRateFormComponent } from './calculator-card/cap-rate-component/cap-rate-form/caprate-form-field.component';
import {OnePercentCardComponent} from './calculator-card/one-percent-component/one-percent-card';
import {OnePercentFormComponent} from './calculator-card/one-percent-component/one-percent-form/one-percent-form-field-component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarOverviewComponent,
    MenuOverviewComponent,
    CapRateCardComponent,
    CapRateFormComponent,
    OnePercentCardComponent,
    OnePercentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
