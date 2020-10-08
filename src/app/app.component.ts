import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuestionType } from '../questionnaire/enums/question-type.enum';
import { ExcelFileParserService } from 'src/questionnaire/services/excel-file-parser.service';
import { QuestionModel } from '../questionnaire/models/question.model';
import { HttpProxyService } from './services/http-proxy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  public questions: QuestionModel[] = [];
  public questionType = QuestionType;
  private subscription: Subscription;
  private defaultQuestionId = '1';

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpProxy: HttpProxyService,
    private excelParser: ExcelFileParserService
  ) {}

  public ngOnInit(): void {
    let questionId: string = this.activatedRoute.snapshot.paramMap.get('id');
    if (!questionId) {
      questionId = this.defaultQuestionId;
    }

    this.httpProxy
      .getQuestions(questionId)
      .subscribe((result: QuestionModel[]) => (this.questions = [...result]));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public uploadFile(data: string[]): void {
    const newQuestions: QuestionModel[] = this.excelParser.parse(data);
    this.questions = [...newQuestions];
  }

  public save(): void {
    console.log(this.questions);
  }
}
