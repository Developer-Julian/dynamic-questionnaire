import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'question-body',
  templateUrl: './question-body.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionBodyComponent {
  @ViewChild(TemplateRef)
  public bodyContent: TemplateRef<any>;
}
