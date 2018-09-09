import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SportListComponent } from '../sports/sport-list/sport-list.component';
import { AthleteListComponent } from '../athlete/athlete-list/athlete-list.component';

const routes: Routes = [
    {
        path: 'sports',
        children: [
            {
                path: 'list',
                component: SportListComponent
            }
        ]
    },
    {
        path: 'athletes',
        children: [
            {
                path: 'list',
                component: AthleteListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}