import { Component, inject } from '@angular/core';
import { TaskListComponent } from '@src/app/components/task-list/task-list.component';
// import { HttpService } from '@src/app/services/http.service';
import { LocalStorageService } from '@src/app/services/local-storage.service';

@Component({
    selector: 'app-completed-tasks',
    standalone: true,
    imports: [TaskListComponent],
    templateUrl: './completed-tasks.component.html',
})
export class CompletedTasksComponent {
    newTask: string = '';
    allTasks: any[] = [];

    // httpService = inject(HttpService);
    localStorageService = inject(LocalStorageService);

    ngOnInit() {
        this.getAllTasks();
    }

    getAllTasks = () => {
        // this.httpService.getAllTasks().subscribe((result: any) => {
        //     this.allTasks = result.filter(
        //         (task: any) => task.status === 'completed'
        //     );
        // });
        try {
            this.allTasks = this.localStorageService
                .getAllTasks()
                .filter((task) => task.status === 'completed');
        } catch (error) {
            console.log(error);
        }
    };

    onComplete = (task: Task) => {
        if (task.status === 'completed') {
            task.status = 'pending';
        } else {
            task.status = 'completed';
        }
        // this.httpService.updateTask(task).subscribe(() => {
        //     this.getAllTasks();
        // });
        try {
            this.localStorageService.updateTask(task);
            this.getAllTasks();
        } catch (error) {
            console.log(error);
        }
    };
}
