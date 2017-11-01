import { ConfigPageComponent } from './config-page/config-page.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { ConnectPageComponent } from './connect-page/connect-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'connect',
    component: ConnectPageComponent
  },{
    path: 'message',
    component : MessagePageComponent
  },{
    path: 'config',
    component : ConfigPageComponent
  },{
    path: '**',
    redirectTo: '/connect'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
