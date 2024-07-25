import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LEONA } from '../../champion/champion.interface';
import { ChampionService } from '../../champion/champion.service';
import { ItemBuildService } from '../../item-build/item-build.service';
import {
  FINAL_CITY_TRANSIT,
  SEARING_SHORTBOW,
} from '../../weapon/weapon.interface';
import { WeaponService } from '../../weapon/weapon.service';

@Component({
  selector: 'swarm-leona',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './leona.component.html',
  styleUrl: './leona.component.scss',
})
export class LeonaComponent {
  #championService = inject(ChampionService);
  #itemBuildService = inject(ItemBuildService);
  weaponService = inject(WeaponService);

  champ = this.#championService.getChampionByName(LEONA);

  searingShortBow = this.weaponService.getWeaponByName(SEARING_SHORTBOW);
  finalCityTransit = this.weaponService.getWeaponByName(FINAL_CITY_TRANSIT);

  itemBuilds = this.#itemBuildService.getItemBuildsByChampion(LEONA);
}
