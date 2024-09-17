import { Component, OnInit, Input } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;
  Constructor() { } 
  ngOnInit() {
  }

}
