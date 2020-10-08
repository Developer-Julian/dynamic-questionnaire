import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { QuestionModel } from '../../models/question.model';

@Component({
  selector: 'question-radio',
  templateUrl: './question-radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionRadioComponent {
  @Input() question: QuestionModel;
}
