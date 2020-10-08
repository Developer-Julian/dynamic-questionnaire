import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'question-save',
  templateUrl: './question-save.component.html',
})
export class QuestionSaveComponent {
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
}
