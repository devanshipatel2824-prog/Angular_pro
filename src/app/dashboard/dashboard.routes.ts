import { Routes } from "@angular/router";
import { Charts } from "./charts/charts";
import { Users } from "./users/users";
import { Dashboard } from "./dashboard";

export const dashboardRoutes:Routes=[
{   
    path: '',
    component: Dashboard,
    children: [
      { path: 'charts', component: Charts },
      { path: 'users', component: Users },
         
      
    ]
  }
]