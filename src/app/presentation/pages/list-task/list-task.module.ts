import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskRoutingModule } from './list-task-routing.module';
import { ListTaskComponent } from './list-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardTaskComponent } from '../../components/@standalone/card-task/card-task.component';

@NgModule({
  declarations: [
    ListTaskComponent
  ],
  imports: [
    CommonModule,
    ListTaskRoutingModule,
    ReactiveFormsModule,
    CardTaskComponent
  ]
})
export class ListTaskModule { }
