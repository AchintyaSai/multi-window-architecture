import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameTableComponent } from './game-table.component';

const routes: Routes = [{ path: '', component: GameTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameTableRoutingModule { }
