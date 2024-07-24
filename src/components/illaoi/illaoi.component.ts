import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChampionService } from '../../champion/champion.service';
import { ItemBuildService } from '../../item-build/item-build.service';
import { UpgradeService } from '../../upgrades/upgrade.service';
import { WeaponService } from '../../weapon/weapon.service';
import { ILLAOI } from '../../champion/champion.interface';
import { ABILITY_HASTE, DURATION } from '../../upgrades/upgrade.interface';
import { RADIANT_FIELD } from '../../weapon/weapon.interface';
import {
  Augment,
  CARD_COLLECTOR,
  ULTIMATE_SPEED_UP,
  UPTIME_UPGRADE,
} from '../../augment/augment.interface';
import { AugmentService } from '../../augment/augment.service';

@Component({
  selector: 'swarm-illaoi',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './illaoi.component.html',
  styleUrl: './illaoi.component.scss',
})
export class IllaoiComponent {
  #championService = inject(ChampionService);
  #itemBuildService = inject(ItemBuildService);
  #upgradeService = inject(UpgradeService);
  #augmentService = inject(AugmentService);
  weaponService = inject(WeaponService);

  champ = this.#championService.getChampionByName(ILLAOI);

  duration = this.#upgradeService.getUpgradeByName(DURATION);
  abilityHaste = this.#upgradeService.getUpgradeByName(ABILITY_HASTE);

  radientField = this.weaponService.getWeaponByName(RADIANT_FIELD);

  itemBuilds = this.#itemBuildService.getItemBuildsByChampion(ILLAOI);

  augments: Augment[] = [
    this.#augmentService.getAugmentByName(ULTIMATE_SPEED_UP),
    this.#augmentService.getAugmentByName(UPTIME_UPGRADE),
    this.#augmentService.getAugmentByName(CARD_COLLECTOR),
  ];
}
