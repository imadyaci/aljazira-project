import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AljaziraHeaderComponent } from './aljazira-header/aljazira-header.component';
import { HomeComponent } from './aljazira-header/home.component';
import { AboutusComponent } from './aljazira-header/aboutus.component';

import { routing } from './app.routing';

import { QuranComponent } from './aljazira-header/quran.component';
import { ActivitiesComponent } from './aljazira-header/activities.component';
import { DonateComponent } from './aljazira-header/donate.component';

import { AljaziraFooterComponent } from './aljazira-footer.component';
import { SlideBarComponent } from './slide-bar.component';
import { SlideBarLeftComponent } from './slide-bar-left.component';

@NgModule({
  declarations: [
    AppComponent,

    AljaziraHeaderComponent,

    HomeComponent,

    AboutusComponent,

    QuranComponent,

    ActivitiesComponent,

    DonateComponent,

    AljaziraFooterComponent,

    SlideBarComponent,

    SlideBarLeftComponent,

    SlideBarLeftComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
