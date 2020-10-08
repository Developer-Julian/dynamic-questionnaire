import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { QuestionBodyComponent } from '../question-body/question-body.component';
import { QuestionTitleComponent } from '../question-title/question-title.component';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent {
  @ContentChild(QuestionBodyComponent)
  public contentComponent: QuestionBodyComponent;

  @ContentChild(QuestionTitleComponent)
  public titleComponent: QuestionTitleComponent;
}
