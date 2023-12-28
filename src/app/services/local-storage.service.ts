import { Injectable } from '@angular/core';

const storageName = 'tasks';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    private taskList: Task[];
    constructor() {
        const jsonData = localStorage.getItem(storageName);
        this.taskList = jsonData ? JSON.parse(jsonData) : [];
    }

    addTask = (data: WriteTask) => {
        const newTask = { ...data, id: this.taskList.length };
        this.taskList.push(newTask);
        this.updateLocalStorage();
        return newTask;
    };

    getAllTasks = () => {
        return [...this.taskList] as Task[];
    };

    updateTask = (data: Task) => {
        this.taskList.forEach((task) => {
            if (task.id === data.id) {
                task = data;
            }
        });
        this.updateLocalStorage();
    };

    deleteTask = (data: Task) => {
        this.taskList = this.taskList.filter((task) => task.id !== data.id);
        this.updateLocalStorage();
    };

    updateLocalStorage = () => {
        localStorage.setItem(storageName, JSON.stringify(this.taskList));
    };
}
