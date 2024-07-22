import { Routes } from '@angular/router';
import { TierlistComponent } from './components/tierlist/tierlist.component';
import { JinxComponent } from './components/jinx/jinx.component';
import { SeraphineComponent } from './components/seraphine/seraphine.component';
import { IllaoiComponent } from './components/illaoi/illaoi.component';
import { LeonaComponent } from './components/leona/leona.component';
import { YasuoComponent } from './components/yasuo/yasuo.component';
import { RivenComponent } from './components/riven/riven.component';
import { XayahComponent } from './components/xayah/xayah.component';
import { BriarComponent } from './components/briar/briar.component';
import { AuroraComponent } from './components/aurora/aurora.component';

export const routes: Routes = [
  { path: 'tierlist', component: TierlistComponent },
  { path: 'jinx', component: JinxComponent },
  { path: 'seraphine', component: SeraphineComponent },
  { path: 'illaoi', component: IllaoiComponent },
  { path: 'leona', component: LeonaComponent },
  { path: 'yasuo', component: YasuoComponent },
  { path: 'riven', component: RivenComponent },
  { path: 'xayah', component: XayahComponent },
  { path: 'briar', component: BriarComponent },
  { path: 'aurora', component: AuroraComponent },
  { path: '', redirectTo: '/tierlist', pathMatch: 'full' },
  { path: '**', redirectTo: '/tierlist', pathMatch: 'full' },
];
