import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TierService } from '../../tier/tier.service';
import { NgFor, NgStyle } from '@angular/common';
import { ChampionService } from '../../champion/champion.service';
import { WeaponService } from '../../weapon/weapon.service';
import { NavigationService } from '../navbar/navbar.service';

@Component({
  selector: 'tierlist',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgStyle],
  templateUrl: './tierlist.component.html',
  styleUrl: './tierlist.component.scss',
})
export class TierlistComponent {
  tierService = inject(TierService);
  navigationService = inject(NavigationService);
  championService = inject(ChampionService);
  weaponsService = inject(WeaponService);
}
