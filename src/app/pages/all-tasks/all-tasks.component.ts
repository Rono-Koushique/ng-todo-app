import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from '@src/app/components/task-list/task-list.component';
import { HttpService } from '@src/app/services/http.service';
import { StateService } from '@src/app/services/state.service';

@Component({
    selector: 'app-all-tasks',
    standalone: true,
    imports: [FormsModule, TaskListComponent, DatePipe],
    templateUrl: './all-tasks.component.html',
})
export class AllTasksComponent {
    newTask: string = '';
    initialAllTasks: Task[] = [];
    allTasks: Task[] = [];

    httpService = inject(HttpService);
    stateService = inject(StateService);

    ngOnInit() {
        this.stateService.searchSubject.subscribe((value) => {
            if (value) {
                this.allTasks = this.initialAllTasks.filter((task: Task) => {
                    return task.title
                        .toLowerCase()
                        .includes(value.toLowerCase());
                });
            } else {
                this.allTasks = this.initialAllTasks;
            }
        });
        this.getAllTasks();
    }

    addTask = () => {
        this.httpService
            .addTask({
                title: this.newTask,
                status: 'pending',
                createdAt: new Date(),
            })
            .subscribe(() => {
                this.newTask = '';
                this.getAllTasks();
            });
    };

    getAllTasks = () => {
        // this.httpService.getAllTasks().subscribe((result: Task[]) => {
        //     this.initialAllTasks = this.allTasks = result;
        // });
    };

    onComplete = (task: Task) => {
        if (task.status === 'completed') {
            task.status = 'pending';
        } else {
            task.status = 'completed';
        }
        this.httpService.updateTask(task).subscribe(() => {
            this.getAllTasks();
        });
    };

    onDelete = (task: Task) => {
        this.httpService.deleteTask(task).subscribe(() => {
            this.getAllTasks();
        });
    };
}
