import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from './player.service';
import { Player } from './player';

@Component({
    selector: 'app-battle-component',
    templateUrl: './battle.component.html',
    styleUrls: [ './preparing.component.css' ]
})

export class BattleComponent {
    player: Player = this.playerService.player;
    opponent: Player = this.playerService.opponent;
    turnNumber: number = 0;
    game: any = this.playerService.game;

    constructor(private router: Router, private playerService: PlayerService) {}
    public onOpponentFieldClick(square: any) {
        this.playerService.fire(square);
        this.turnNumber = this.playerService.turnNumber;
    }
}
