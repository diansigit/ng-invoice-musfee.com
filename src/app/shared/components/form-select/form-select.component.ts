import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  @Input() disabled = false;
  @Input() formControl: FormControl;
  @Input() id: any;
  @Input() multiple: any;
  @Input() options: any;
  @Input() selected: any;

  @Output() optionSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectChange($event) {
    console.log($event.target.value);
    this.optionSelected.emit($event.target.value);
  }

}
