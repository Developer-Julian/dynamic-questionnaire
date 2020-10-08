import { Component, EventEmitter, Output } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'question-uploader',
  templateUrl: './question-uploader.component.html',
})
export class QuestionUploaderComponent {
  @Output() uploadFile: EventEmitter<string[]> = new EventEmitter<string[]>();
  constructor() {}

  public excelInputChange(fileInputEvent: any): void {
    const target = fileInputEvent.target;
    if (target.files.length > 1) {
      throw new Error('Cannot use multiple files');
    }

    if (!this.isFileExtentionValid(target.accept, target.value)) {
      throw new Error('Accept only .cv, .xslx, .xls files');
    }

    const reader: FileReader = new FileReader();
    reader.onload = (e: any): void => {
      try {
        e.target.files = [];
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        const data: any = XLSX.utils.sheet_to_json(ws, { header: 1 });

        this.uploadFile.emit(data);
      } catch (error) {
        console.error(error);
      }
    };
    reader.readAsBinaryString(target.files[0]);
  }

  private isFileExtentionValid(
    acceptFileTypesString: string,
    fileName: string
  ): boolean {
    return (
      acceptFileTypesString == null ||
      (fileName != null &&
        acceptFileTypesString
          .split(',')
          .some((element: string) => fileName.endsWith(element.trim())))
    );
  }
}
