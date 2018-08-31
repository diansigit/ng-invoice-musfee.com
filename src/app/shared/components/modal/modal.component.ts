import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() btnSaveValid = true;
  @Input() title: string;
  @Input() showBtnCancel = true;
  @Input() showBtnSave = true;

  @Output() btnCancelClicked = new EventEmitter();
  @Output() btnCloseClicked = new EventEmitter();
  @Output() btnSaveClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onBtnCancelClick() {
    this.btnCancelClicked.emit();
  }

  onBtnCloseClick() {
    this.btnCloseClicked.emit();
  }

  onBtnSaveClick() {
    this.btnSaveClicked.emit();
  }

}
