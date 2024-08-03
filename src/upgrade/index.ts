import { UpgradeService } from './upgrade.service';

export function provideUpgrades() {
  return [UpgradeService];
}
