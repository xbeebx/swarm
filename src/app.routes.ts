import { Routes } from '@angular/router';
import { TierlistComponent } from './components/tierlist/tierlist.component';
import { JinxComponent } from './components/jinx.component';
import { SeraphineComponent } from './components/seraphine.component';
import { IllaoiComponent } from './components/illaoi.component';
import { LeonaComponent } from './components/leona.component';
import { YasuoComponent } from './components/yasuo.component';
import { RivenComponent } from './components/riven.component';
import { XayahComponent } from './components/xayah.component';
import { BriarComponent } from './components/briar.component';
import { AuroraComponent } from './components/aurora.component';
import { DifficultiesComponent } from './components/difficulties/difficulties.component';
import { MapsComponent } from './components/maps/maps.component';
import { UpgradesComponent } from './components/upgrades/upgrades.component';
import { ChampionsComponent } from './components/champions/champions.component';

export const routes: Routes = [
  { path: 'tierlist', component: TierlistComponent },
  { path: 'difficulties', component: DifficultiesComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'upgrades', component: UpgradesComponent },
  {
    path: 'champions',
    component: ChampionsComponent,
    children: [
      { path: 'jinx', component: JinxComponent },
      { path: 'seraphine', component: SeraphineComponent },
      { path: 'illaoi', component: IllaoiComponent },
      { path: 'leona', component: LeonaComponent },
      { path: 'yasuo', component: YasuoComponent },
      { path: 'riven', component: RivenComponent },
      { path: 'xayah', component: XayahComponent },
      { path: 'briar', component: BriarComponent },
      { path: 'aurora', component: AuroraComponent },
    ],
  },

  { path: '', redirectTo: '/tierlist', pathMatch: 'full' },
  { path: '**', redirectTo: '/tierlist', pathMatch: 'full' },
];
