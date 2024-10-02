import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() form!: FormGroup;

  constructor(private fb: FormBuilder) {
  } 

  createSkill(): FormGroup {
    return this.fb.group({
      nameSkiller: [null,Validators.required]
    });
  }

  get persons(): FormArray {
    return this.form.get('persons') as FormArray;
  }

  getSkills(personIndex: number): FormArray {
    return (this.persons.at(personIndex).get('skills') as FormArray);
  }

  addPerson(): void {
    this.persons.push(this.createPerson());
  }

  createPerson(): FormGroup {
    return this.fb.group({
      namePerson: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.min(18)]],
      skills: this.fb.array([this.createSkill()]) 
    });
  }

  removePerson(index: number): void {
    this.persons.removeAt(index);
  }

  addSkill(personIndex: number): void {
    this.getSkills(personIndex).push(this.createSkill());
  }

  removeSkill(personIndex: number, skillIndex: number): void {
    this.getSkills(personIndex).removeAt(skillIndex);
  }
}
