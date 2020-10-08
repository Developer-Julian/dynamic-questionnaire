import { Inject, Injectable } from '@angular/core';
import { ExcelColumnName } from '../enums/excel-column-name.enum';
import { ExcelColumnIndex } from '../interfaces/excel-column-index.interface';
import { IConfig } from '../interfaces/iconfig.interface';
import { Config } from '../models/config.model';
import { QuestionModel } from '../models/question.model';

@Injectable({ providedIn: 'root' })
export class ExcelFileParserService {
  constructor(@Inject(Config) private config: IConfig) {}

  public parse(data: string[]): QuestionModel[] {
    const {
      indexColumnType,
      indexColumnTitle,
      indexColumnMultyValue,
      indexColumnValue,
    } = this.getIndexes(data);
    const result: QuestionModel[] = [];

    if (
      indexColumnType === -1 ||
      indexColumnTitle === -1 ||
      indexColumnMultyValue === -1 ||
      indexColumnValue === -1
    ) {
      throw Error('Document is not valid');
    }

    for (let i = 1; i < data.length; i++) {
      result.push(
        new QuestionModel(
          +data[i][indexColumnType],
          data[i][indexColumnTitle],
          data[i][indexColumnValue],
          data[i][indexColumnMultyValue]?.split(this.config.delimiter)
        )
      );
    }

    return result;
  }

  private getIndexes(data: string[]): ExcelColumnIndex {
    const indexColumnType = data[0].indexOf(ExcelColumnName.Type);
    const indexColumnTitle = data[0].indexOf(ExcelColumnName.Title);
    const indexColumnMultyValue = data[0].indexOf(ExcelColumnName.MultyValues);
    const indexColumnValue = data[0].indexOf(ExcelColumnName.Value);

    return {
      indexColumnType,
      indexColumnTitle,
      indexColumnMultyValue,
      indexColumnValue,
    } as ExcelColumnIndex;
  }
}
