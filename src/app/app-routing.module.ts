import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationComponent } from "./pages/presentation/presentation.component";
import {SigninComponent } from "./pages/signin/signin.component";
import { ProductsComponent } from "./pages/products/products.component";
import { CustomersComponent } from "./pages/customers/customers.component";
import { InvoicesComponent } from "./pages/invoices/invoices.component";
import { ReturnsComponent } from "./pages/returns/returns.component";
import { RepairsComponent } from "./pages/repairs/repairs.component";
import { LogsComponent } from "./pages/logs/logs.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboards/dashboard",
    pathMatch: "full"
  },
  {
    path: "presentation",
    component: PresentationComponent
  },
  {
    path: "login",
    component: SigninComponent
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboards",
        loadChildren: "./pages/dashboards/dashboards.module#DashboardsModule"
      },
      {
        path: "components",
        loadChildren: "./pages/components/components.module#ComponentsModule"
      },
      {
        path: "forms",
        loadChildren: "./pages/forms/forms.module#FormsModules"
      },
      {
        path: "tables",
        loadChildren: "./pages/tables/tables.module#TablesModule"
      },
      {
        path: "maps",
        loadChildren: "./pages/maps/maps.module#MapsModule"
      },
      {
        path: "widgets",
        loadChildren: "./pages/widgets/widgets.module#WidgetsModule"
      },
      {
        path: "charts",
        loadChildren: "./pages/charts/charts.module#ChartsModule"
      },
      {
        path: "calendar",
        loadChildren: "./pages/calendar/calendar.module#CalendarModule"
      },
      {
        path: "examples",
        loadChildren: "./pages/examples/examples.module#ExamplesModule"
      },
      {
        path: "products",
        component: ProductsComponent
      },
      {
        path: "customers",
        component: CustomersComponent
      },
      {
        path: "invoices",
        component: InvoicesComponent
      },
      {
        path: "returns",
        component: ReturnsComponent
      },
      {
        path: "repairs",
        component: RepairsComponent
      },
      {
        path: "logs",
        component: LogsComponent
      }

    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "examples",
        loadChildren:
          "./layouts/auth-layout/auth-layout.module#AuthLayoutModule"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
