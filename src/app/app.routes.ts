import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { About } from './about/about';

export const routes: Routes = [
{
    path:'home',
    component:Home
},
// {
//     path:'',
//     redirectTo:'home',
//     pathMatch:'full'
// },
{
    path:'',
    component:Home
},
{
    path:'about',
    component:About
},
{
    path:"**",
    component:PageNotFound
}
];
