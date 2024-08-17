import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ChampionsNavbarComponent } from '../champions-navbar/champions-navbar.component';
import { ChampionNavigationService } from '../champions-navbar/champions-navbar.service';
import { JINX } from '../../champion/champion.interface';
import { CHAMPIONS, NavigationService } from '../navbar/navbar.service';

@Component({
  selector: 'swarm-champions',
  standalone: true,
  imports: [RouterOutlet, NgFor, ChampionsNavbarComponent],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.scss',
})
export class ChampionsComponent implements OnInit {
  #router = inject(Router);
  #championNavigationService = inject(ChampionNavigationService);
  #navigationService = inject(NavigationService);

  ngOnInit(): void {
    if (
      this.#router.url === this.#navigationService.getItemByName(CHAMPIONS).link
    ) {
      this.#router.navigate([
        this.#championNavigationService.getItemByName(JINX).link,
      ]);
    }
  }
}
