import { NgClass, NgFor, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BRIAR, JINX, LEONA } from '../../champion/champion.interface';
import { ChampionService } from '../../champion/champion.service';
import { TierService } from '../../tier/tier.service';
import { WeaponService } from '../../weapon/weapon.service';
import { NavigationService, TIERLIST } from '../navbar/navbar.service';
import { ChampionNavigationService } from '../champions-navbar/champions-navbar.service';

@Component({
  selector: 'swarm-tierlist',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgStyle, NgClass, NgTemplateOutlet],
  templateUrl: './tierlist.component.html',
  styleUrl: './tierlist.component.scss',
})
export class TierlistComponent {
  tierService = inject(TierService);
  navigationService = inject(NavigationService);
  championNavigationService = inject(ChampionNavigationService);
  championService = inject(ChampionService);
  weaponsService = inject(WeaponService);

  tierlistNavigation = this.navigationService.getItemByName(TIERLIST);

  briar = this.championService.getChampionByName(BRIAR);
  leona = this.championService.getChampionByName(LEONA);
  jinx = this.championService.getChampionByName(JINX);
}
