import { Component, inject, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChampionService } from '../../champion/champion.service';
import { JINX } from '../../champion/champion.interface';
import { WeaponService } from '../../weapon/weapon.service';
import { VORTEX_GLOVE } from '../../weapon/weapon.interface';
import { ItemBuildService } from '../../item-build/item-build.service';
import { NgFor } from '@angular/common';
import { AugmentService } from '../../augment/augment.service';
import {
  Augment,
  CROSS_COUNTRY,
  RAMMING_RUNNER,
} from '../../augment/augment.interface';

@Component({
  selector: 'swarm-jinx',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './jinx.component.html',
  styleUrl: './jinx.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class JinxComponent {
  #championService = inject(ChampionService);
  #itemBuildService = inject(ItemBuildService);
  #augmentService = inject(AugmentService);
  weaponService = inject(WeaponService);

  champ = this.#championService.getChampionByName(JINX);
  itemBuilds = this.#itemBuildService.getItemBuildsByChampion(JINX);
  vortexGlove = this.weaponService.getWeaponByName(VORTEX_GLOVE);

  augments: Augment[] = [
    this.#augmentService.getAugmentByName(RAMMING_RUNNER),
    this.#augmentService.getAugmentByName(CROSS_COUNTRY),
  ];
}
