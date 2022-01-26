import { Component, Renderer2, ElementRef, ViewChild, ViewChildren, QueryList, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { Observable } from 'rxjs';

import jspdf from 'jspdf';

import { FieldsController } from '../controller';
import { FieldDetail } from '../graphql';
import { FormFieldComponent } from './formField.component';

@Component({
  templateUrl: './formShow.page.html'
})
          
export class FormShowPage implements OnInit {
  formId: string
  fields: Observable<FieldDetail[]>
  pageData: any[]
  @ViewChildren('formField') fieldComponents:QueryList<FormFieldComponent>
  temp: any
  spacer: any
  hasPrinted: boolean
  hasLoaded: boolean
  
  constructor(private route: ActivatedRoute,
              private fieldsController: FieldsController,
              private renderer: Renderer2,
              private el: ElementRef) {
  }
  
  ngOnInit() {
    this.hasLoaded = false;
    this.hasPrinted = false;    
    this.formId = this.route.snapshot.paramMap.get('id');
    this.fieldsController.getFormFields(this.formId).then(value => {setTimeout(() => {this.hasLoaded = true},0)})
    this.fields = this.fieldsController.getFields();
    this.temp = this.renderer.createElement('div');
    this.spacer = this.renderer.createElement('div');
  }

}
