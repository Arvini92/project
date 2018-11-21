import { Routes, RouterModule } from '@angular/router';

import { NewItemFormComponent } from '../parent-form';
import { NewItemListComponent } from '../parent-list';
import { ChildItemFormComponent } from '../child-form';

const appRoutes: Routes = [
    { path: 'add/child', component: ChildItemFormComponent },
    { path: 'add/parent', component: NewItemFormComponent },
    { path: '', component: NewItemListComponent },
    
];

export const routing = RouterModule.forRoot(appRoutes);