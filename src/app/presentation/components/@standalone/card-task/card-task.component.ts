import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import Task from 'src/app/core/entities/task.entity';
import { TaskService } from 'src/app/core/services/task.service';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-card-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss']
})
export class CardTaskComponent extends BaseComponent {
  
  @ViewChild('alertContainer', { read: ViewContainerRef }) set viewContainerRef(vcr: ViewContainerRef) {
    this.alertContainer = vcr;
  }

  @Input() tasks: Task[] = [];
  
  constructor(private taskServices: TaskService){
    super();
  }
  
  completedTask(task: Task){
    task.completed = true;
    this.taskServices.updateTask(task);
    this.showAlert("¡Felicidades! Has completado la tarea " + task.nameTask.toUpperCase(),"success");
  }
}
