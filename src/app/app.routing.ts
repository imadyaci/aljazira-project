import {Routes , RouterModule} from "@angular/router";
import {HomeComponent} from './aljazira-header/home.component';
import {AboutusComponent} from './aljazira-header/aboutus.component';
import {QuranComponent} from './aljazira-header/quran.component';
import {ActivitiesComponent} from './aljazira-header/activities.component';
import {DonateComponent} from './aljazira-header/donate.component';
import {PrayerTimesComponent} from "./prayer-times.component";
import {ContactComponent} from "./contact.component";
import {GeneralActivitiesComponent} from "./general-activities.component";
import {EidComponent} from "./aljazira-header/eid.component";




const APP_ROUTES: Routes= [
  {path: ''        ,component: HomeComponent},
  {path: 'AboutUs',component: AboutusComponent},
  {path: 'Quran',component: QuranComponent},
  {path: 'Activities',component: ActivitiesComponent},
  {path: 'Donate',component: DonateComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'prayer-times',component: PrayerTimesComponent},
  {path: 'general-activities', component: GeneralActivitiesComponent},
  {path: 'eid', component: EidComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
