import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GoalDataService } from './goal-data.service';
import { HeaderComponent } from './header/header.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalItemComponent } from './goal-item/goal-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoalListComponent,
    GoalItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GoalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
