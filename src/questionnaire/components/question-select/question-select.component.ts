import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { QuestionModel } from '../../models/question.model';

@Component({
  selector: 'question-select',
  templateUrl: './question-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionSelectComponent {
  @Input() question: QuestionModel;
}
