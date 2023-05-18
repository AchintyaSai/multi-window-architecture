import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path : '', redirectTo:'main', pathMatch:'full'},{ path: 'settings', loadChildren: () => import('./windows/settings/settings.module').then(m => m.SettingsModule) }, { path: 'game-table', loadChildren: () => import('./windows/game-table/game-table.module').then(m => m.GameTableModule) }, { path: 'main', loadChildren: () => import('./windows/main/main.module').then(m => m.MainModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
