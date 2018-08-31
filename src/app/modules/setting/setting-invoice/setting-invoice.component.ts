import { Component, OnInit, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Import TinyMCE
import 'tinymce/tinymce.min.js';

// A theme is also required
import 'tinymce/themes/modern/theme';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';

declare var tinymce: any;

@Component({
  selector: 'app-setting-invoice',
  templateUrl: './setting-invoice.component.html',
  styleUrls: ['./setting-invoice.component.scss']
})
export class SettingInvoiceComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {

  public formInvoice: FormGroup;
  public dataInvoice: any;
  public editor;
  public content;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#header',
      height : 150,
      branding: false,
      menubar: false,
      toolbar: [
        'undo redo | styleselect | bold italic | bullist numlist | alignleft aligncenter alignright alignjustify'
      ],
      plugins: ['lists'],
      skin_url: '/assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent();
        }).on('blur', function (e) {
          console.log('Editor was blurred!');
          const content = editor.getContent();
        });
      },
    });
  }

  ngOnChanges() {
    if (this.editor) {
      if (this.content && this.content.length > 0) {
        this.editor.setContent(this.content);
      } else {
        this.editor.setContent('');
      }
    }
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  ngOnInit() {
    if (this.dataInvoice) {
      this.formInvoice = this.formBuilder.group({
        header: [this.dataInvoice.header, Validators.required],
        number: [this.dataInvoice.number, Validators.required]
      });
    } else {
      this.formInvoice = this.formBuilder.group({
        header: ['', Validators.required],
        number: ['', Validators.required]
      });
    }
  }

  onFormInvoiceSubmit(value) {

  }

}
