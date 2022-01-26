import { Component, Input, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { EntryDetail } from '../graphql';
import { FieldsController } from '../controller';

@Component({
  selector: 'formFieldComponent',
  templateUrl: './formField.component.html',
  styleUrls: ['./form.css']
})
          
export class FormFieldComponent implements OnInit {
  @Input() field: any;
  @Input() class: string;
  fieldCopy: any;
  @ViewChild('fieldElement') elementView: ElementRef;  
  sanitizedText: any;
  fieldModel = '';
  isLeaderMode = false;
  isPDF = false;
  isBlank = false;
  
  entryObject: EntryDetail;
  
  constructor(private route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private fieldsController: FieldsController) {
  }
  
  ngOnInit() {
    this.fieldCopy = JSON.parse(JSON.stringify(this.field))
    this.fieldModel = this.field.entry.entry
    this.route.params.subscribe(params => {
    })
    this.route.queryParams.subscribe(params => {
      if (params.leader === 'true') {
        this.isLeaderMode = true;
      }
      if (params.pdf === 'true') {
        this.isPDF = true;
      }
      if (params.blank === 'true') {
        this.isBlank = true;
      }
    })
  }

  fieldOnBlur() {
    if (this.fieldModel === this.fieldCopy.entry.entry) {
      return;
    }
    this.entryObject = {
      fieldId: this.field.fieldId,
      entry: this.fieldModel
    }
    this.fieldsController.updateEntry(this.entryObject).then(response => {
      if (response == 'success') {
        this.fieldCopy.entry = this.entryObject
      }
    })
  }
}