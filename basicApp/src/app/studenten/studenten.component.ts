import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../students';

@Component({
  selector: 'app-studenten',
  templateUrl: './studenten.component.html',
  styleUrls: ['./studenten.component.scss']
})
export class StudentenComponent implements OnInit {
  students = STUDENTS;
  selectedStudent: Student;

  constructor() { }

  ngOnInit() {
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

}
