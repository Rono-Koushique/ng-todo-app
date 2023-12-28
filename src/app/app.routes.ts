import { Routes } from '@angular/router';
import { AllTasksComponent } from 'src/app/pages/all-tasks/all-tasks.component';
import { PendingTasksComponent } from 'src/app/pages/pending-tasks/pending-tasks.component';
import { CompletedTasksComponent } from 'src/app/pages/completed-tasks/completed-tasks.component';

export const routes: Routes = [
    {
        path: '',
        component: AllTasksComponent,
    },
    {
        path: 'pending',
        component: PendingTasksComponent,
    },
    {
        path: 'completed',
        component: CompletedTasksComponent,
    },
];
