import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChampionService } from '../../champion/champion.service';
import { ItemBuildService } from '../../item-build/item-build.service';
import { WeaponService } from '../../weapon/weapon.service';
import { AURORA } from '../../champion/champion.interface';
import { NgFor } from '@angular/common';
import { THE_ANNIHILATOR } from '../../weapon/weapon.interface';

@Component({
  selector: 'swarm-aurora',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './aurora.component.html',
  styleUrl: './aurora.component.scss',
})
export class AuroraComponent {
  #championService = inject(ChampionService);
  #itemBuildService = inject(ItemBuildService);
  weaponService = inject(WeaponService);

  champ = this.#championService.getChampionByName(AURORA);

  theAnnihilator = this.weaponService.getWeaponByName(THE_ANNIHILATOR);

  itemBuilds = this.#itemBuildService.getItemBuildsByChampion(AURORA);
}
