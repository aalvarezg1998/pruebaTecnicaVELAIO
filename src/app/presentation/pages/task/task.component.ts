import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Person from 'src/app/core/entities/person.entity';
import Task from 'src/app/core/entities/task.entity';
import { TaskService } from 'src/app/core/services/task.service';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent extends BaseComponent { 

  @ViewChild('alertContainer', { read: ViewContainerRef }) set viewContainerRef(vcr: ViewContainerRef) {
    this.alertContainer = vcr;
  }

  form: FormGroup;
  newSkill: boolean = false;

  constructor(private fb: FormBuilder,private taskService: TaskService) {
    super();
    this.form = this.fb.group({
      nameTask: ['', Validators.required],
      finalDate: ['', [Validators.required]],
      persons: this.fb.array([this.createPerson()])
    });
  }

  createPerson(): FormGroup {
    return this.fb.group({
      namePerson: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.min(18)]],
      skills: this.fb.array([this.createSkill()]) 
    });
  }

  createSkill(): FormGroup {
    return this.fb.group({
      nameSkiller: [null,Validators.required]
    });
  }

  onSubmit() {  
    if (this.form.valid) {
      const task: Task = this.form.value;
      if(!this.validatePersons(task.persons)){
        this.showAlert("Cada persona debe tener por lo menos una habilidad.","warning");
        return;
      }
      if(this.validateNamePersons(task.persons)){
        this.showAlert("No se pueden tener dos personas con el mismo nombre en una misma tarea.","warning", 5000);
        return;
      }
      task.completed = false;
      this.taskService.addTask(task);
      this.showAlert("Se ha guardado la tarea " + task.nameTask.toUpperCase(),"success");
      this.form.reset();
    } else {
      console.log('Form Not Valid');
    }
  }

  validatePersons(persons: Person[]): boolean {
    return persons.every(person => {
      const skills = person.skills;
      return skills.length > 0 ; 
    });
  }

  validateNamePersons(persons: Person[]): boolean {
    return  persons.some((person, _, arr) => 
        arr.filter(p => p.namePerson === person.namePerson).length > 1
      );
  }
  

}
