import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { About } from './about/about';
import { Contactus } from './contactus/contactus';
import { Default } from './default/default';
import { Shop } from './shop/shop';
import { Checkout } from './checkout/checkout';
import { Admin } from './admin/admin';
import { AddProduct } from './admin/add-product/add-product';
import { ViewCustomer } from './admin/view-customer/view-customer';
import { ViewOrder } from './admin/view-order/view-order';
import { Payment } from './payment/payment';
import { Ordersucess } from './ordersucess/ordersucess';
import { Dashboard } from './dashboard/dashboard';
import { Charts } from './dashboard/charts/charts';
import { Users } from './dashboard/users/users';

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
    path:'shop',
    component:Shop
},
{ 
    path: 'checkout', 
    component:Checkout 
},
{
    path:'payment',
    component:Payment
},
{
    path:'ordersucess',
    component:Ordersucess
},

{
    path: 'dashboard',
    loadChildren: () =>import('./dashboard/dashboard.routes').then(m => m.dashboardRoutes),
},
{
    path:'',
    redirectTo:'homepage',
    pathMatch:'full'
},
{
        path:'Admin',
        component:Admin,
        children:[
                {
                        path:'add-product',
                        component:AddProduct
                },
                {
                        path:'view-customer',
                        component:ViewCustomer
                },
                {
                        path:'view-order',
                        component:ViewOrder
                },

            ]
},
{
    path:'',
    component:Admin
},
{
     path: '', 
     redirectTo: 'shop',
     pathMatch: 'full'
},
{
    path:'**',
    component:Default
}
];
