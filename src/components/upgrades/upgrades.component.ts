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

  displayedColumns: string[] = ['Upgrade', 'Increment', 'Max level'];
  dataSource = this.upgradeService.getUpgrades();

  isBoss = (item: Item) => {
    return item.type === 'boss';
  };
  isUpgrade = (item: Item) => {
    return item.type === 'upgrade';
  };
}
