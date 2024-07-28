import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { XAYAH } from '../../champion/champion.interface';
import { ChampionService } from '../../champion/champion.service';
import { ItemBuildService } from '../../item-build/item-build.service';
import { WeaponService } from '../../weapon/weapon.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'swarm-xayah',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './xayah.component.html',
  styleUrl: './xayah.component.scss',
})
export class XayahComponent {
  #championService = inject(ChampionService);
  #itemBuildService = inject(ItemBuildService);
  weaponService = inject(WeaponService);

  champ = this.#championService.getChampionByName(XAYAH);

  itemBuilds = this.#itemBuildService.getItemBuildsByChampion(XAYAH);
}
