import { Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

export const appRoutes: Routes = [
    {path: 'page1', component: Page1Component},
    {path: 'page2', component: Page2Component},
    {path: '', redirectTo: '/page1', pathMatch: 'full'}
];

export const appComponents = [Page1Component, Page2Component];