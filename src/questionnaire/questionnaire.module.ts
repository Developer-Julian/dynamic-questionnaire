import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionUploaderComponent } from './components/question-uploader/question-uploader.component';
import { MaterialModule } from '../app/material.module';
import { IConfig } from './interfaces/iconfig.interface';
import { Config } from './models/config.model';
import { ExcelFileParserService } from './services/excel-file-parser.service';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionBodyComponent } from './components/question-body/question-body.component';
import { QuestionCheckboxComponent } from './components/question-checkbox/question-checkbox.component';
import { QuestionInputComponent } from './components/question-input/question-input.component';
import { QuestionRadioComponent } from './components/question-radio/question-radio.component';
import { QuestionTextareaComponent } from './components/question-textarea/question-textarea.component';
import { QuestionSelectComponent } from './components/question-select/question-select.component';
import { QuestionDateComponent } from './components/question-date/question-date.component';
import { QuestionTitleComponent } from './components/question-title/question-title.component';
import { QuestionSaveComponent } from './components/question-save/question-save.component';
import { QuestionMarkComponent } from './components/question-mark/question-mark.component';

@NgModule({
  declarations: [
    QuestionnaireComponent,
    QuestionComponent,
    QuestionBodyComponent,
    QuestionnaireComponent,
    QuestionCheckboxComponent,
    QuestionInputComponent,
    QuestionRadioComponent,
    QuestionTextareaComponent,
    QuestionSelectComponent,
    QuestionDateComponent,
    QuestionUploaderComponent,
    QuestionTitleComponent,
    QuestionSaveComponent,
    QuestionMarkComponent,
  ],
  imports: [FormsModule, BrowserAnimationsModule, MaterialModule],
  exports: [
    QuestionnaireComponent,
    QuestionComponent,
    QuestionBodyComponent,
    QuestionnaireComponent,
    QuestionCheckboxComponent,
    QuestionInputComponent,
    QuestionRadioComponent,
    QuestionTextareaComponent,
    QuestionSelectComponent,
    QuestionDateComponent,
    QuestionUploaderComponent,
    QuestionTitleComponent,
    QuestionSaveComponent,
    QuestionMarkComponent,
  ],
})
export class QuestionnaireModule {
  static forRoot(config: IConfig): ModuleWithProviders<QuestionnaireModule> {
    return {
      ngModule: QuestionnaireModule,
      providers: [
        ExcelFileParserService,
        { provide: Config, useValue: config },
      ],
    };
  }
}
