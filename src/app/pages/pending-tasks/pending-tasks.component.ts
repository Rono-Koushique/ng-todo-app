import { Component, inject } from '@angular/core';
import { TaskListComponent } from '@src/app/components/task-list/task-list.component';
import { HttpService } from '@src/app/services/http.service';

@Component({
    selector: 'app-pending-tasks',
    standalone: true,
    imports: [TaskListComponent],
    templateUrl: './pending-tasks.component.html',
})
export class PendingTasksComponent {
    newTask: string = '';
    allTasks: any[] = [];

    httpService = inject(HttpService);

    ngOnInit() {
        this.getAllTasks();
    }

    getAllTasks = () => {
        this.httpService.getAllTasks().subscribe((result: any) => {
            this.allTasks = result.filter(
                (task: any) => task.status === 'pending'
            );
        });
    };

    onComplete = (task: any) => {
        if (task.status === 'completed') {
            task.status = 'pending';
        } else {
            task.status = 'completed';
        }
        this.httpService.updateTask(task).subscribe(() => {
            this.getAllTasks();
        });
    };
}
