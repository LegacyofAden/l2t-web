/*
 * Copyright (C) [2013] - [2017] Operartis llc
 * All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {PlayerClassPopulation} from '../model/player-class-population';
import {Observable} from 'rxjs/index';

/*
 *@author Pere
 *@since 09/13/2017
 */
@Injectable()
export class GameserverService {

  constructor(private http: HttpClient) {
  }

  getPopulation(): Observable<PlayerClassPopulation[]> {
    return this.http.get<PlayerClassPopulation[]>(`${environment.apiUrl}/population`);
  }
}
