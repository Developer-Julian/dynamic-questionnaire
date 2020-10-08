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

    return of(result);
  }
}
