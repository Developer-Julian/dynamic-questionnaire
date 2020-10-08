import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { QuestionModel } from '../../models/question.model';

@Component({
  selector: 'question-mark',
  templateUrl: './question-mark.component.html',
  styleUrls: ['./question-mark.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionMarkComponent {
  @Input() question: QuestionModel;
}
