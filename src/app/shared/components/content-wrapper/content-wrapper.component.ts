import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss']
})
export class ContentWrapperComponent implements OnInit {
  @Input() title: string;
  @Input() showTitle = true;
  @Input() createBtnTitle: string;
  @Input() showButtonCreate = false;
  @Input() showButtonPrint = false;
  @Input() showButtonAcademicYear = false;

  @Output() createClicked = new EventEmitter();
  @Output() printClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onBtnCreateClick() {
    this.createClicked.emit();
  }

  onBtnPrintClick() {
    this.printClicked.emit();
  }

}
