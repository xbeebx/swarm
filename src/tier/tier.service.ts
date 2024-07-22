import { Injectable } from '@angular/core';
import { Tier, TierTypes } from './tier.interface';

@Injectable({
  providedIn: 'root',
})
export class TierService {
  #tiers: Tier[] = [
    { name: 'S', color: '#ff9900' },
    { name: 'A', color: '#4190ff' },
    { name: 'B', color: '#79b1e3' },
    { name: 'C', color: '#4e5773' },
  ];

  getTiers = () => {
    return this.#tiers;
  };

  get = (tier: TierTypes) => {
    return this.#tiers.filter((t) => t.name === tier)[0];
  };
}
