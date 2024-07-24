import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { NavigationService } from './navbar.service';

@Component({
  selector: 'swarm-navbar',
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
