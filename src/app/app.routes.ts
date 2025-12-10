import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { About } from './about/about';
import { Contactus } from './contactus/contactus';
import { Default } from './default/default';

export const routes: Routes = [
{
    path:'homepage',
    component:Homepage
    
},
{
    path:'about',
    component:About
},
{
    path:'contactus',
    component:Contactus
},
{
    path:'',
    redirectTo:'homepage',
    pathMatch:'full'
},
{
    path:'**',
    component:Default

}
];
