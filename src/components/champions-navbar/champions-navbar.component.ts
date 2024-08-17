import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ChampionNavigationService } from './champions-navbar.service';

@Component({
  selector: 'swarm-champions-navbar',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './champions-navbar.component.html',
  styleUrl: './champions-navbar.component.scss',
})
export class ChampionsNavbarComponent {
  #router = inject(Router);
  championNavigationService = inject(ChampionNavigationService);

  navigate = (link: string) => {
    this.#router.navigate([link]);
  };

  isSelected = (link: string) => {
    return this.#router.url.startsWith(link);
  };

  onKeyUp = (event: KeyboardEvent, link: string) => {
    if (
      event.code === 'Space' ||
      event.code === 'Enter' ||
      event.code === 'NumpadEnter'
    ) {
      this.#router.navigate([link]);
    }
  };
}
