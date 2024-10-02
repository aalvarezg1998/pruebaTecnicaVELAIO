import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Task from '../entities/task.entity';
import Filter from '../entities/filters.entity';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private idsTask: number = 1; 
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]); 

  constructor() {}

  getAllTasks(filter: Filter): Observable<Task[]> {
    const taskFilter = this.filterTasks(this.tasks,filter.status,filter.nameTask);
    this.tasksSubject = new BehaviorSubject<Task[]>(taskFilter);
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task): void {
    task.id = this.idsTask;
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
    this.idsTask ++;
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.tasksSubject.next(this.tasks);
    }
  }

  filterTasks(tasks: Task[], completedFilter: boolean | undefined, nameTaskFilter: string): Task[] {
    return tasks.filter(task => {
        const matchesCompleted = completedFilter !== undefined ? task.completed === completedFilter : true;
        const matchesNameTask = nameTaskFilter ? task.nameTask === nameTaskFilter : true;
        return matchesCompleted && matchesNameTask;
    });
  }
}
