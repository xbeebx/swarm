import { WeaponService } from './weapon.service';

export function provideWeapons() {
  return [WeaponService];
}
