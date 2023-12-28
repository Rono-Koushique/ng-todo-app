import { DatePipe, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [NgClass, DatePipe],
    templateUrl: './task-list.component.html',
})
export class TaskListComponent {
    @Input() taskList: Task[] = [];
    @Output() complete = new EventEmitter<any>();
    @Output() delete = new EventEmitter<any>();

    toggleComplete = (task: Task) => {
        this.complete.emit(task);
    };

    deleteTask = (task: Task) => {
        this.delete.emit(task);
    };
}
