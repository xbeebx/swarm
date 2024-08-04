import { NgClass, NgFor, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import { DifficultyService } from '../../difficulty/difficulty.service';
import {
  DifficultyTypes,
  EXTREME,
  HARD,
  STORY,
} from '../../difficulty/difficuty.interface';
import { TooltipDirective } from '../tooltip.directive';

export interface DifficultyElement {
  name: string;
  values: Record<DifficultyTypes, string>;
}

const ENEMY_HEALTH = 'Enemy health';
const ENEMY_ATTACK_DAMAGE = 'Enemy attack damage';
const ENEMY_SPELL_DAMAGE = 'Enemy spell damage';
const ALLY_GOLD_INCOME = 'Ally gold income';

const ELEMENT_DATA: DifficultyElement[] = [
  {
    name: ENEMY_HEALTH,
    values: { [STORY]: '1x', [HARD]: '3x', [EXTREME]: '7x' },
  },
  {
    name: ENEMY_ATTACK_DAMAGE,
    values: { [STORY]: '1x', [HARD]: '2x', [EXTREME]: '3x' },
  },
  {
    name: ENEMY_SPELL_DAMAGE,
    values: { [STORY]: '1x', [HARD]: '1.5x', [EXTREME]: '2x' },
  },
  {
    name: ALLY_GOLD_INCOME,
    values: { [STORY]: '1x', [HARD]: '1.5x', [EXTREME]: '2.25x' },
  },
];

@Component({
  selector: 'swarm-difficulties',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    NgStyle,
    NgClass,
    NgTemplateOutlet,
    MatTableModule,
    TooltipDirective,
  ],
  templateUrl: './difficulties.component.html',
  styleUrl: './difficulties.component.scss',
})
export class DifficultiesComponent {
  difficultService = inject(DifficultyService);

  // make the difficulties available in the html
  STORY: DifficultyTypes = STORY;
  HARD: DifficultyTypes = HARD;
  EXTREME: DifficultyTypes = EXTREME;

  displayedColumns: string[] = ['Parameter', STORY, HARD, EXTREME];
  dataSource = ELEMENT_DATA;

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // chart: any = [];
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // chart2: any = [];

  // ngOnInit() {
  //   this.chart = new Chart('mycanvas', {
  //     type: 'bar',
  //     data: {
  //       labels: Object.keys(
  //         ELEMENT_DATA.filter((e) => e.name === ENEMY_HEALTH)[0].values
  //       ),
  //       datasets: [
  //         {
  //           data: Object.values(
  //             ELEMENT_DATA.filter((e) => e.name === ENEMY_HEALTH)[0].values
  //           ).map((e) => e.substring(0, e.length - 1)),
  //           borderWidth: 1,
  //           backgroundColor: '#ff9900',
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //       plugins: {
  //         legend: {
  //           display: false,
  //         },
  //       },
  //     },
  //   });
  // }

  // createCustomTooltip = (id: string) => {
  //   return (this.chart2 = new Chart(id, {
  //     type: 'bar',
  //     data: {
  //       labels: Object.keys(
  //         ELEMENT_DATA.filter((e) => e.name === ENEMY_HEALTH)[0].values
  //       ),
  //       datasets: [
  //         {
  //           data: Object.values(
  //             ELEMENT_DATA.filter((e) => e.name === ENEMY_HEALTH)[0].values
  //           ).map((e) => e.substring(0, e.length - 1)),
  //           borderWidth: 1,
  //           backgroundColor: '#ff9900',
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //       plugins: {
  //         legend: {
  //           display: false,
  //         },
  //       },
  //     },
  //   }));
  // };

  //   this.console.log(
  //     Object.values(
  //       ELEMENT_DATA.filter((e) => e.name === ENEMY_HEALTH)[0].values
  //     ).map((e) => e.substring(0, e.length - 1))
  //   );
  // }
}
