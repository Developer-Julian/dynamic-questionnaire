import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuestionModel } from '../../questionnaire/models/question.model';

@Injectable()
export class HttpProxyService {
  constructor(private http: HttpClient) {}

  public getQuestions(questionId: string): Observable<QuestionModel[]> {
    const result: QuestionModel[] = [];
    // return this.http.get<QuestionModel[]>(`your api/${questionId}`);
    result.push(new QuestionModel(1, 'What is OOP?', null, null));
    result.push(new QuestionModel(2, 'Are you working?', null, ['Yes', 'No']));
    result.push(
      new QuestionModel(3, 'Do you want to work?', null, [
        'Yes',
        'No',
        "I don't know",
      ])
    );
    result.push(
      new QuestionModel(4, 'Which patterns do you know?', null, null)
    );
    result.push(
      new QuestionModel(5, 'Do you want to work?', null, [
        'Yes',
        'No',
        "I don't know",
      ])
    );
    result.push(
      new QuestionModel(6, 'What year have you been working?', null, null)
    );
    result.push(
      new QuestionModel(
        7,
        'What grade do you give for this questionnaire?',
        null,
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
      )
    );
    return of(result);
  }
}
