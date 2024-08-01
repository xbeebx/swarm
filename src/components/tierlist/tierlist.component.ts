import { NgClass, NgFor, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BRIAR, JINX, LEONA } from '../../champion/champion.interface';
import { ChampionService } from '../../champion/champion.service';
import { TierService } from '../../tier/tier.service';
import { WeaponService } from '../../weapon/weapon.service';
import { NavigationService } from '../navbar/navbar.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'swarm-tierlist',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgStyle, NgClass, NgTemplateOutlet],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000),
      ]),
      transition(':leave', [
        animate(1000, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
  templateUrl: './tierlist.component.html',
  styleUrl: './tierlist.component.scss',
})
export class TierlistComponent {
  tierService = inject(TierService);
  navigationService = inject(NavigationService);
  championService = inject(ChampionService);
  weaponsService = inject(WeaponService);

  activatedAnimations: string[] = [];

  briar = this.championService.getChampionByName(BRIAR);
  leona = this.championService.getChampionByName(LEONA);
  jinx = this.championService.getChampionByName(JINX);

  activateAnimation = (key: string, shouldActivate: boolean) => {
    if (shouldActivate) {
      this.activatedAnimations.push(key);
    } else {
      this.activatedAnimations.filter((obj) => obj !== key);
    }
  };

  shouldAnimate = (key: string) => {
    // console.log('should animate', key);
    // console.log(this.activatedAnimations.includes(key));
    return this.activatedAnimations.includes(key);
  };
}
