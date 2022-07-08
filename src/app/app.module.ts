import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersRoutingModule } from './customers/customers-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomersModule } from './customers/customers.module';
import { OrdersRoutingModule } from './orders/orders-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersRoutingModule,
    OrdersRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
