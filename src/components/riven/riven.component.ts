import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Augment,
  GATHERING_SPEED,
  RAMMING_RUNNER,
  ULTIMATE_SPEED_UP,
  WITH_HASTE,
} from '../../augment/augment.interface';
import { AugmentService } from '../../augment/augment.service';
import { RIVEN } from '../../champion/champion.interface';
import { ChampionService } from '../../champion/champion.service';
import { ItemBuildService } from '../../item-build/item-build.service';
import { PAW_PRINT_POISONER } from '../../weapon/weapon.interface';
import { WeaponService } from '../../weapon/weapon.service';

@Component({
  selector: 'swarm-riven',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './riven.component.html',
  styleUrl: './riven.component.scss',
})
export class RivenComponent {
  #championService = inject(ChampionService);
  #itemBuildService = inject(ItemBuildService);
  #augmentService = inject(AugmentService);
  weaponService = inject(WeaponService);

  champ = this.#championService.getChampionByName(RIVEN);

  pawPrintPrisoner = this.weaponService.getWeaponByName(PAW_PRINT_POISONER);

  itemBuilds = this.#itemBuildService.getItemBuildsByChampion(RIVEN);

  augments: Augment[] = [
    this.#augmentService.getAugmentByName(RAMMING_RUNNER),
    this.#augmentService.getAugmentByName(GATHERING_SPEED),
    this.#augmentService.getAugmentByName(WITH_HASTE),
    this.#augmentService.getAugmentByName(ULTIMATE_SPEED_UP),
  ];
}
