import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  game: any;
  
  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private eliteApi: EliteApi) {}

  ionViewWillLoad() {
    this.game = this.navParams.data;
  }

  teamTapped(teamId) {
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id===teamId);
    this.navCtrl.push(TeamHomePage, team);
  }

}
