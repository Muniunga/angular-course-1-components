import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() courseSelected = new EventEmitter<Course>();
  Constructor() { }
  ngOnInit() {
  }
  onCourseViewed() {
    console.log('Card component - button clicked...');
    this.courseSelected.emit(this.course);
  }

  // @Output() courseSelected = new EventEmitter<Course>();-> Essa é a forma mais comum e direta de declarar um evento de saída no Angular. O nome do evento que será emitido será exatamente o mesmo nome da variável, ou seja, courseSelected.

  // @Output('courseSelected')  courseEmitter = new EventEmitter<Course>(); ->Aqui, estamos renomeando o evento exposto para o componente pai usando a sintaxe @Output('courseSelected'). Isso significa que, mesmo que o nome da propriedade dentro do componente filho seja courseEmitter, o nome que será usado pelo componente pai para ouvir esse evento será courseSelected.
  // -------------EXEMplo completo----------------
  // onCourseViewed(){
  //   console.log('Card component - button clicked...');
  //   this.courseEmitter.emit(this.course);
  // }


}
