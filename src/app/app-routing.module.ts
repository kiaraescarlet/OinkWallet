import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }, 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'iniciarsesion',
    loadChildren: () => import('./iniciarsesion/iniciarsesion.module').then( m => m.IniciarsesionPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'paginainicial',
    loadChildren: () => import('./paginainicial/paginainicial.module').then( m => m.PaginainicialPageModule)
  },
  {
    path: 'ajuste',
    loadChildren: () => import('./ajuste/ajuste.module').then( m => m.AjustePageModule)
  },
  {
    path: 'interface',
    loadChildren: () => import('./interface/interface.module').then( m => m.InterfacePageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'formulario2',
    loadChildren: () => import('./formulario2/formulario2.module').then( m => m.Formulario2PageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
