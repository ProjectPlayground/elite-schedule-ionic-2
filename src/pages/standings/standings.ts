import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EliteApi } from '../../shared/shared';
import _ from 'lodash';

@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html'
})
export class StandingsPage {
  allStandings: any[];
  standings: any[];
  team: any;

  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private eliteApi: EliteApi) {}

  ionViewWillLoad() {
    this.team = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    this.standings = tourneyData.standings;

    this.allStandings = _.chain(this.standings)
      .groupBy('division')
      .toPairs()
      .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
      .value();
  }

}