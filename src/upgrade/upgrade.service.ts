import { Injectable } from '@angular/core';
import {
  ABILITY_HASTE,
  ANIMA_POWER,
  AREA_SIZE,
  ARMOR,
  BATTLE_BUNNY_BOON_DURATION,
  CRITICAL_CHANCE,
  DAMAGE,
  DURATION,
  EXP,
  GOLD_MULTIPLIER,
  HEALTH_REGENERATION,
  MAX_HEALTH,
  MOVEMENT_SPEED,
  PICKUP_RADIUS,
  PROJECTILE_COUNT,
  Upgrade,
  UpgradeTypes,
} from './upgrade.interface';

const UPGRADE_ASSETS_FOLDER = 'assets/upgrades/';

@Injectable({
  providedIn: 'root',
})
export class UpgradeService {
  #upgrades: Upgrade[] = [
    {
      name: DAMAGE,
      icon: UPGRADE_ASSETS_FOLDER + 'damage.png',
      increment: '+10%',
      maxLevel: 8,
    },
    {
      name: ARMOR,
      icon: UPGRADE_ASSETS_FOLDER + 'armor.png',
      increment: '+5',
      maxLevel: 5,
    },
    {
      name: MAX_HEALTH,
      icon: UPGRADE_ASSETS_FOLDER + 'max_health.png',
      increment: '+10%',
      maxLevel: 5,
    },
    {
      name: HEALTH_REGENERATION,
      icon: UPGRADE_ASSETS_FOLDER + 'health_regeneration.png',
      increment: '+3',
      maxLevel: 5,
    },
    {
      name: MOVEMENT_SPEED,
      icon: UPGRADE_ASSETS_FOLDER + 'movement_speed.png',
      increment: '+5%',
      maxLevel: 5,
    },
    {
      name: PICKUP_RADIUS,
      icon: UPGRADE_ASSETS_FOLDER + 'pickup_radius.png',
      increment: '+25%',
      maxLevel: 3,
    },
    {
      name: AREA_SIZE,
      icon: UPGRADE_ASSETS_FOLDER + 'area_size.png',
      increment: '+5%',
      maxLevel: 4,
    },
    {
      name: DURATION,
      icon: UPGRADE_ASSETS_FOLDER + 'duration.png',
      increment: '+5%',
      maxLevel: 4,
    },
    {
      name: CRITICAL_CHANCE,
      icon: UPGRADE_ASSETS_FOLDER + 'critical_chance.png',
      increment: '+5%',
      maxLevel: 4,
    },
    {
      name: ABILITY_HASTE,
      icon: UPGRADE_ASSETS_FOLDER + 'ability_haste.png',
      increment: '+5',
      maxLevel: 5,
    },
    {
      name: EXP,
      icon: UPGRADE_ASSETS_FOLDER + 'experience.png',
      increment: '+5%',
      maxLevel: 5,
    },
    {
      name: PROJECTILE_COUNT,
      icon: UPGRADE_ASSETS_FOLDER + 'projectile_count.png',
      increment: '+1',
      maxLevel: 2,
    },
    {
      name: GOLD_MULTIPLIER,
      icon: UPGRADE_ASSETS_FOLDER + 'gold_multiplier.png',
      increment: '+15%',
      maxLevel: 3,
    },
    {
      name: BATTLE_BUNNY_BOON_DURATION,
      icon: UPGRADE_ASSETS_FOLDER + 'battle_bunny_boon_duration.png',
      increment: '+25%',
      maxLevel: 2,
    },
    {
      name: ANIMA_POWER,
      icon: UPGRADE_ASSETS_FOLDER + 'anima_power.png',
      increment: 'See below table',
      maxLevel: 100,
    },
  ];

  getUpgrades = () => {
    return this.#upgrades;
  };

  getUpgradeByName = (upgrade: UpgradeTypes) => {
    return this.#upgrades.filter((u) => u.name === upgrade)[0];
  };
}
