import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BRIAR, JINX, LEONA } from '../../champion/champion.interface';
import { ChampionService } from '../../champion/champion.service';
import { ItemBuildService } from '../../item-build/item-build.service';
import { ANTI_SHAK_SEA_MINE } from '../../weapon/weapon.interface';
import { WeaponService } from '../../weapon/weapon.service';

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
  weaponService = inject(WeaponService);

  champ = this.#championService.getChampionByName(BRIAR);
  jinx = this.#championService.getChampionByName(JINX);
  leona = this.#championService.getChampionByName(LEONA);

  itemBuilds = this.#itemBuildService.getItemBuildsByChampion(BRIAR);
  antiSharkSeaMine = this.weaponService.getWeaponByName(ANTI_SHAK_SEA_MINE);
}
