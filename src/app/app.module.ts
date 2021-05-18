import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatDialogModule } from '@angular/material/dialog';
//Material Section
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule} from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatListModule  } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ChartsModule } from 'ng2-charts';
import {MatTabsModule} from '@angular/material/tabs';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MatGridListModule} from '@angular/material/grid-list';
import { AddSurveyQuestionComponent } from './add-survey-question/add-survey-question.component';
import { AnswerComponent } from './answer/answer.component';
import { EditSurveyQuestionComponent } from './edit-survey-question/edit-survey-question.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { ResponsesListComponent } from './responses-list/responses-list.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyPreviewComponent } from './survey-preview/survey-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSurveyQuestionComponent,
    AnswerComponent,
    EditSurveyQuestionComponent,
    LoginComponent,
    QuestionComponent,
    QuestionEditComponent,
    QuestionListComponent,
    ResponsesListComponent,
    SurveyComponent,
    SurveyListComponent,
    SurveyPreviewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    MatTooltipModule,
    HttpClientModule,
    MatListModule,
    DragDropModule,
    MatDividerModule,
    MatDialogModule,
    MatExpansionModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    ChartsModule,
    MatTabsModule,
    NgxChartsModule,
    MatGridListModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [AddSurveyQuestionComponent, EditSurveyQuestionComponent, QuestionEditComponent]
})
export class AppModule { }
