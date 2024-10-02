import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from '../../components/@standalone/person/person.component';


@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    PersonComponent
  ]
})
export class TaskModule { }
