import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import 'remixicon/fonts/remixicon.css';
import '@fontsource/inter';

import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'swarm-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
