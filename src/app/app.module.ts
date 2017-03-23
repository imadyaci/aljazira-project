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
import { ContactComponent } from './contact.component';
import { PrayerTimesComponent } from './prayer-times.component';
import { GeneralActivitiesComponent } from './general-activities.component';
import { EidComponent } from './aljazira-header/eid.component';

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

    ContactComponent,

    PrayerTimesComponent,

    GeneralActivitiesComponent,


    EidComponent,

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
