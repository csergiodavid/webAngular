import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'change-detection',
                title: 'change detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
            },
            {
                path: 'control-flow',
                title: 'control-flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
            },
            {
                path: 'defer-options',
                title: 'defer options',
                loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component')
            },
            {
                path: 'defer-views',
                title: 'defer views',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
            },
            {
                path: 'user:id',
                title: 'user',
                loadComponent: () => import('./dashboard/pages/user/user.component')
            },
            {
                path: 'user-list',
                title: 'users',
                loadComponent: () => import('./dashboard/pages/users/users.component')
            },
            {
                path: 'view-transiction',
                title: 'view transiction',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component')
            },
            {
                path: '',
                redirectTo: 'control-flow',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
