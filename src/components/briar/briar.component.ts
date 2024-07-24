import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChampionService } from '../../champion/champion.service';
import { ItemBuildService } from '../../item-build/item-build.service';
import { AugmentService } from '../../augment/augment.service';
import { WeaponService } from '../../weapon/weapon.service';
import { BRIAR, JINX, LEONA } from '../../champion/champion.interface';
import { Augment } from '../../augment/augment.interface';
import { NgFor } from '@angular/common';
import { ANTI_SHAK_SEA_MINE } from '../../weapon/weapon.interface';

@Component({
  selector: 'briar',
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
