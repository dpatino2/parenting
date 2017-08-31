import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdTabsModule, 
          MdMenuModule, 
          MdToolbarModule, 
          MdIconModule, 
          MdListModule, 
          MdButtonModule, 
          MdCardModule,
          MdGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { User } from './user';
import { Capability } from './capability';
import { AchievementDefinition } from './achievement-definition';
import { Act } from './act';
import { ActSelectorComponent } from './act-selector/act-selector.component';
import { CapabilityListComponent } from './capability-list/capability-list.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ActSelectorComponent,
    CapabilityListComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdTabsModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdListModule,
    MdButtonModule,
    MdCardModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
