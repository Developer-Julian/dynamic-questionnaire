import { Component, Input, OnInit } from '@angular/core';
import { QuestionModel } from 'src/questionnaire/models/question.model';

@Component({
  selector: 'question-textarea',
  templateUrl: './question-textarea.component.html',
})
export class QuestionTextareaComponent {
  @Input() question: QuestionModel;
}
