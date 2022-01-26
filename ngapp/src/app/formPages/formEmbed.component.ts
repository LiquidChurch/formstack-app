import { Component, Input, ElementRef, ViewChild, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'formEmbedComponent',
  templateUrl: './formEmbed.component.html',
  styleUrls: ['./form.css']
})
          
export class FormEmbedComponent implements OnInit {
  @Input() field: any;
  @ViewChild('embedElement') elementView: ElementRef;  
  url: string;
  width: number;
  height: number;
  
  constructor() {
  }
 
  ngOnInit() {
    let temp = this.field.replace(/</g,' ')
    temp = temp.replace(/>/g,' ');
    let embedParse = temp.split(" ")
    
    embedParse.forEach(item => {
      if (item.substring(0,3) == "src") {
        let temp1 = item.split('"')
        if (temp1[1] != undefined) {
          this.url = temp1[1]
        }
      }
    })
    
    this.width = this.calculateWidth()
    this.height = this.calculateHeight()
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = this.calculateWidth()
    this.height = this.calculateHeight()
  }  
  calculateWidth(): number {
    let temp = window.innerWidth
    
    if (temp > 868) {
      return 828
    } else {
      return temp - 40
    }
  }
  
  calculateHeight(): number {
    return Math.round(this.width/1.778)
  } 
}