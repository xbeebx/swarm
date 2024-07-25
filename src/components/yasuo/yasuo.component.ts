import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChampionService } from '../../champion/champion.service';
import { ItemBuildService } from '../../item-build/item-build.service';
import { WeaponService } from '../../weapon/weapon.service';
import { BRIAR, YASUO } from '../../champion/champion.interface';
import { BATTLE_BUNNY_CROWBOW } from '../../weapon/weapon.interface';
import { NavigationService } from '../navbar/navbar.service';

@Component({
  selector: 'swarm-yasuo',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './yasuo.component.html',
  styleUrl: './yasuo.component.scss',
})
export class YasuoComponent {
  #championService = inject(ChampionService);
  #itemBuildService = inject(ItemBuildService);
  weaponService = inject(WeaponService);
  navigationService = inject(NavigationService);

  champ = this.#championService.getChampionByName(YASUO);
  briar = this.#championService.getChampionByName(BRIAR);

  battleBunnyCrowbow = this.weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW);

  itemBuilds = this.#itemBuildService.getItemBuildsByChampion(YASUO);
}
