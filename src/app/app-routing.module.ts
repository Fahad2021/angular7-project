import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { PipeComponent } from './pipe/pipe.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ServiceComponent } from './service/service.component';
import { HttpclientComponent} from './httpclient/httpclient.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"Event",component:EventbindComponent},
  {path:"pipe",component:PipeComponent},
  {path:"data",component:DatabindingComponent},
  {path:"service",component:ServiceComponent},
  {path:"httpclient",component:HttpclientComponent},
  {path:"form",component:FormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [HomeComponent,FormComponent,EventbindComponent,HttpclientComponent,ServiceComponent,PipeComponent,DatabindingComponent];
