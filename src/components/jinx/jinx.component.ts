import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChampionService } from '../../champion/champion.service';
import { JINX } from '../../champion/champion.interface';
import { WeaponService } from '../../weapons/weapon.service';
import { VORTEX_GLOVE } from '../../weapons/weapon.interface';
import { ItemBuildService } from '../../item-build/item-build.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'jinx',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './jinx.component.html',
  styleUrl: './jinx.component.scss',
})
export class JinxComponent {
  #championService = inject(ChampionService);
  #itemBuildService = inject(ItemBuildService);
  weaponService = inject(WeaponService);

  jinx = this.#championService.getChampionByName(JINX);
  itemBuilds = this.#itemBuildService.getItemBuildsByChampion(JINX);
  vortexGlove = this.weaponService.getWeaponByName(VORTEX_GLOVE);

  constructor() {
    console.log(this.itemBuilds);
  }
}
