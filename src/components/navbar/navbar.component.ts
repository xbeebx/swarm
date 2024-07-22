import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

import { ChampionService } from '../../champion/champion.service';
import { NavigationService } from './navbar.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  #router = inject(Router);
  navigationService = inject(NavigationService);

  navigate = (link: string) => {
    this.#router.navigate([link]);
  };

  isSelected = (link: string) => {
    return this.#router.url.startsWith(link);
  };
}
