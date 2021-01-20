import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from "ngx-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { TagInputModule } from "ngx-chips";
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationModule } from "./pages/presentation/presentation.module";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { SigninComponent } from './pages/signin/signin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './pages/products/products.component';

import { NgxPrintModule } from "ngx-print";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { CustomersComponent } from './pages/customers/customers.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { RepairsComponent } from './pages/repairs/repairs.component';
import { LogsComponent } from './pages/logs/logs.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    TagInputModule,
    PresentationModule,
    FontAwesomeModule,
    NgxDatatableModule,
    NgxPrintModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, SigninComponent, ProductsComponent, CustomersComponent, InvoicesComponent, ReturnsComponent, RepairsComponent, LogsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
