import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChampionService } from '../../champion/champion.service';
import { ItemBuildService } from '../../item-build/item-build.service';
import { WeaponService } from '../../weapon/weapon.service';
import { SERAPHINE } from '../../champion/champion.interface';
import { UpgradeService } from '../../upgrades/upgrade.service';
import { PROJECTILE_COUNT } from '../../upgrades/upgrade.interface';

@Component({
  selector: 'swarm-seraphine',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './seraphine.component.html',
  styleUrl: './seraphine.component.scss',
})
export class SeraphineComponent {
  #championService = inject(ChampionService);
  #itemBuildService = inject(ItemBuildService);
  #upgradeService = inject(UpgradeService);
  weaponService = inject(WeaponService);

  champ = this.#championService.getChampionByName(SERAPHINE);
  projectileCount = this.#upgradeService.getUpgradeByName(PROJECTILE_COUNT);

  itemBuilds = this.#itemBuildService.getItemBuildsByChampion(SERAPHINE);
}
