import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { QuestionModel } from 'src/questionnaire/models/question.model';

@Component({
  selector: 'question-checkbox',
  templateUrl: './question-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCheckboxComponent {
  @Input() question: QuestionModel;
  public checkboxChange(value: string): void {
    const values: string[] = this.question.value?.split('|') ?? [];
    const valueIndex = values.indexOf(value);
    if (valueIndex >= 0) {
      values.splice(valueIndex, 1);
    } else {
      values.push(`${value}`);
    }

    this.question.value = values.join('|');
  }
}
