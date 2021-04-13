import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; 

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'access-right-error',
    loadChildren: () => import('./access-right-error/access-right-error.module').then( m => m.AccessRightErrorPageModule)
  },
  {
    path: 'create-order',
    loadChildren: () => import('./customerAdmin/create-order/create-order.module').then( m => m.CreateOrderPageModule)
  },
  {
    path: 'view-orders',
    loadChildren: () => import('./customerAdmin/view-orders/view-orders.module').then( m => m.ViewOrdersPageModule)
  },  {
    path: 'view-order-details',
    loadChildren: () => import('./customerAdmin/view-order-details/view-order-details.module').then( m => m.ViewOrderDetailsPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
