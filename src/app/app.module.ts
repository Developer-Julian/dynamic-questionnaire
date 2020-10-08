import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpProxyService } from './services/http-proxy.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { QuestionnaireModule } from '../questionnaire/questionnaire.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    QuestionnaireModule.forRoot({ delimiter: '|' }),
  ],
  providers: [HttpProxyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
