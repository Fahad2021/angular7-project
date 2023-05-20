import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { PipeComponent } from './pipe/pipe.component';
import { SqartPipe } from './sqart.pipe';
import { RoutingComponent} from './app-routing.module';
import { ServiceComponent } from './service/service.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatabindingComponent,
    EventbindComponent,
    PipeComponent,
    SqartPipe,
    RoutingComponent,
    ServiceComponent,
    HttpclientComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
