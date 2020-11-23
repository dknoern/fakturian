import { Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AlternativeComponent } from "./alternative/alternative.component";
import { AuthGuard } from '../../guards/auth.guard';

export const DashboardsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent, canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "alternative",
        component: AlternativeComponent
      }
    ]
  }
];
