import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Filter from 'src/app/core/entities/filters.entity';
import Person from 'src/app/core/entities/person.entity';
import Task from 'src/app/core/entities/task.entity';
import { TaskService } from 'src/app/core/services/task.service';


const person: Person[] = [
  {
      namePerson: "Alexander Alvarez",
      age: 19,
      skills: [
          {
              nameSkiller: "Angular"
          },
          {
            nameSkiller: "Recat js"
          }
      ]
  },
  {
    namePerson: "Mayra Alvarez",
    age: 19,
    skills: [
        {
            nameSkiller: "Angular"
        },
        {
          nameSkiller: "Recat js"
        }
    ]
}
];

const person2: Person[] = [
  {
    namePerson: "Mayra Alvarez",
    age: 19,
    skills: [
        {
            nameSkiller: "Angular"
        },
        {
          nameSkiller: "Recat js"
        }
    ]
}
];

const data: Task[] = [
  {
    id: 1,
    nameTask: "Aprender React",
    finalDate: new Date("2024-04-23"),
    completed: true,
    persons: person
  },
  {
    id: 2,
    nameTask: "Aprender Angular JS",
    finalDate: new Date("2024-04-23"),
    completed: false,
    persons: person2
  }
];

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})

export class ListTaskComponent  implements OnInit{
  form: FormGroup;
  newSkill: boolean = false;
  tasks: Task[] = [];
  consult: boolean = false;

  constructor(private fb: FormBuilder,private taskService: TaskService) {
    this.form = this.fb.group({
      status: [''],
      nameTask: ['']
    });
  }

  ngOnInit(): void {
  }

  consultTask(){
    this.consult = true;
    const filter: Filter = {
      nameTask: this.form.get("nameTask")?.value,
      status: this.createFilterStatus(this.form.get("status")?.value)
    };
    this.getTask(filter);
  }

  createFilterStatus(status: string): boolean | undefined{
    if(status === '') return undefined;
    return status === 'true' ? true : false ;
  }

  getTask(filter: Filter){
    console.log("Filter: ", filter);
    this.taskService.getAllTasks(filter).subscribe({
      next: resp => {
        console.log(resp);
        this.tasks = resp;
      },
      error: err => {
        alert("Ocurrio un error al obtener la lista de tareas.");
        console.error(err);
      }
    })
  }

  removeTask(idTask: number){
    this.taskService.removeTask(idTask);
  }

  clean(){
    this.consult = false;
    this.tasks = [];
    this.form.reset();
    this.form.get("status")?.setValue("");
  }

}
