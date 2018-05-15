/*
 * Copyright (C) [2013] - [2017] Operartis llc
 * All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {AppComponent} from './component/app.component';
import {PopulationComponent} from './component/population/population.component';

/**
 * @author Pere
 * @since 30/07/2017
 */
const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'population', component: PopulationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
