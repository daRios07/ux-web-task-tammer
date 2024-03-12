import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {TrophiesComponent} from './trophies/trophies.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'trophies', component: TrophiesComponent },
];
