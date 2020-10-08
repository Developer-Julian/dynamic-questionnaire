import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'question-title',
  templateUrl: './question-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionTitleComponent {
  @ViewChild(TemplateRef)
  public titleContent: TemplateRef<any>;
}
