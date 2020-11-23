import { Routes } from "@angular/router";

import { ProfileComponent } from "./profile/profile.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { AuthGuard } from '../../guards/auth.guard';
export const ExamplesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "profile",
        component: ProfileComponent, canActivate: [AuthGuard]
      },
      {
        path: "timeline",
        component: TimelineComponent
      }
    ]
  }
];
