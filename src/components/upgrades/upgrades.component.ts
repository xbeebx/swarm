import { NgClass, NgFor, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import { UpgradeService } from '../../upgrade/upgrade.service';
import { BossService } from '../../boss/boss.service';
import { BELVETH } from '../../boss/boss.interface';
import { Item } from '../champion-article/champion-article.interface';
import { NavigationService } from '../navbar/navbar.service';
import {
  ABILITY_HASTE,
  ANIMA_POWER,
  DAMAGE,
  MOVEMENT_SPEED,
  PICKUP_RADIUS,
} from '../../upgrade/upgrade.interface';
import { MatSort, MatSortHeader, Sort } from '@angular/material/sort';

@Component({
  selector: 'swarm-upgrades',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    NgStyle,
    NgClass,
    NgTemplateOutlet,
    MatTableModule,
    MatSort,
    MatSortHeader,
  ],
  templateUrl: './upgrades.component.html',
  styleUrl: './upgrades.component.scss',
})
export class UpgradesComponent {
  upgradeService = inject(UpgradeService);
  bossService = inject(BossService);

  abilityHaste = this.upgradeService.getUpgradeByName(ABILITY_HASTE);
  damage = this.upgradeService.getUpgradeByName(DAMAGE);
  movementSpeed = this.upgradeService.getUpgradeByName(MOVEMENT_SPEED);
  pickupRadius = this.upgradeService.getUpgradeByName(PICKUP_RADIUS);
  animaPower = this.upgradeService.getUpgradeByName(ANIMA_POWER);

  belVeth = this.bossService.getBossByName(BELVETH);

  data = this.upgradeService
    .getUpgrades()
    .sort((a, b) => a.name.localeCompare(b.name));

  sortedData = this.data;
  displayedColumns: string[] = ['Upgrade', 'Increment', 'Max level'];
  dataSource = this.sortedData;

  isBoss = (item: Item) => {
    return item.type === 'boss';
  };
  isUpgrade = (item: Item) => {
    return item.type === 'upgrade';
  };

  sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
    } else {
      this.sortedData = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';

        switch (sort.active) {
          case 'Upgrade':
            return this.compare(a.name, b.name, isAsc);
          default:
            return 0;
        }
      });
    }

    this.dataSource = this.sortedData;
  }

  compare = (a: number | string, b: number | string, isAsc: boolean) => {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  };
}
