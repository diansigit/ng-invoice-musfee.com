import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  AlertModule,
  BsDatepickerModule,
  BsDropdownModule,
  ModalModule,
  TabsModule,
  TimepickerModule,
  TooltipModule
} from 'ngx-bootstrap';
import {
  ContentWrapperComponent,
  DataTableComponent,
  FormSelectComponent,
  HelpTextComponent,
  ModalComponent,
  NavbarComponent,
  SidebarComponent
} from './components';

// Pipe
import {
  CourseTypeLabelPipe,
  PeriodTypeLabelPipe
} from './pipes';

// Service
import { HttpService } from './services';

@NgModule({
  declarations: [
    ContentWrapperComponent,
    DataTableComponent,
    FormSelectComponent,
    HelpTextComponent,
    ModalComponent,
    NavbarComponent,
    SidebarComponent,

    CourseTypeLabelPipe,
    PeriodTypeLabelPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    RouterModule,

    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [
    ContentWrapperComponent,
    DataTableComponent,
    FormSelectComponent,
    HelpTextComponent,
    ModalComponent,
    NavbarComponent,
    SidebarComponent,

    CourseTypeLabelPipe,
    PeriodTypeLabelPipe,

    AlertModule,
    BsDatepickerModule,
    BsDropdownModule,
    CommonModule,
    FormsModule,
    ModalModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    TabsModule,
    TimepickerModule,
    TooltipModule
  ],
  providers: [
    HttpService
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule
    };
  }
}
