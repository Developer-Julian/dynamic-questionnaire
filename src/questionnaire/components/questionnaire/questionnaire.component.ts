import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, map, delay } from 'rxjs/operators';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionnaireComponent implements AfterContentInit {
  @ContentChildren(QuestionComponent)
  public questions: QueryList<QuestionComponent>;

  public questionItems: Observable<QuestionComponent[]>;

  public ngAfterContentInit(): void {
    this.questionItems = this.questions.changes
      .pipe(startWith(''))
      .pipe(delay(0))
      .pipe(
        map(() => {
          const questions = this.questions.toArray();
          return questions;
        })
      );
  }
}
