import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    httpClient = inject(HttpClient);

    addTask(task: WriteTask) {
        return this.httpClient.post(
            'http://localhost:3000/tasks',
            task
        ) as Observable<Task>;
    }

    getAllTasks() {
        return this.httpClient.get('http://localhost:3000/tasks') as Observable<
            Task[]
        >;
    }

    updateTask(task: Task) {
        return this.httpClient.put(
            'http://localhost:3000/tasks/' + task.id,
            task
        ) as Observable<Task>;
    }

    deleteTask(task: Task) {
        return this.httpClient.delete(
            'http://localhost:3000/tasks/' + task.id
        ) as Observable<Task>;
    }
}
