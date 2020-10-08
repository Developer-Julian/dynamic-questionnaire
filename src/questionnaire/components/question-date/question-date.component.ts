import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { QuestionModel } from '../../models/question.model';

@Component({
  selector: 'question-date',
  templateUrl: './question-date.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionDateComponent {
  @Input() question: QuestionModel;
}
