import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BRIAR, JINX, LEONA } from '../../champion/champion.interface';
import { ChampionService } from '../../champion/champion.service';
import { ItemBuildService } from '../../item-build/item-build.service';
import { ANTI_SHAK_SEA_MINE } from '../../weapon/weapon.interface';
import { WeaponService } from '../../weapon/weapon.service';
import { AbilityService } from '../../ability/ability.service';
import { BRIAR_ULTIMATE } from '../../ability/ability.interface';
import { NavigationService } from '../navbar/navbar.service';

@Component({
  selector: 'swarm-briar',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './briar.component.html',
  styleUrl: './briar.component.scss',
})
export class BriarComponent {
  #championService = inject(ChampionService);
  #itemBuildService = inject(ItemBuildService);
  #abilityService = inject(AbilityService);
  weaponService = inject(WeaponService);
  navigationService = inject(NavigationService);

  champ = this.#championService.getChampionByName(BRIAR);
  ultimate = this.#abilityService.getAbilityByName(BRIAR_ULTIMATE);

  jinx = this.#championService.getChampionByName(JINX);
  leona = this.#championService.getChampionByName(LEONA);

  itemBuilds = this.#itemBuildService.getItemBuildsByChampion(BRIAR);
  antiSharkSeaMine = this.weaponService.getWeaponByName(ANTI_SHAK_SEA_MINE);
}
