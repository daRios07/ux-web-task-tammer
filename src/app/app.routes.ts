import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {TrophiesComponent} from './trophies/trophies.component';
import {PlannerComponent} from './planner/planner.component';
import {SettingsComponent} from './settings/settings.component';



export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'trophies', component: TrophiesComponent },
    { path: 'planner', component: PlannerComponent },
    { path: 'settings', component: SettingsComponent },

];
