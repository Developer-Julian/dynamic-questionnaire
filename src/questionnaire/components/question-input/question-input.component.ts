import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { QuestionModel } from '../../models/question.model';

@Component({
  selector: 'question-input',
  templateUrl: './question-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionInputComponent {
  @Input() question: QuestionModel;
}
