import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

@Pipe({
  name: 'bibleRef'
})
export class BibleRefPipe implements PipeTransform {

 constructor(protected sanitizer: DomSanitizer) {}

 public transform(value: any, type: string): any {
       
    var test = value.replace(/(?:\d\s*)?[A-Z]?[a-z]+\s*\d+(?:[:-]\d+)(,\d+)*(?:\s*-\s*\d+)?/gi, function(passage) {
      let book = passage.match(/(?:\d\s*)?[A-Z]?[a-z]+/g)
      
      if (book == null || book[0].length <= 3) {
        return passage
      }
      
      let urlBook = book[0].replace(/\s/g,"").substring(0,3).toUpperCase()
      
      switch(urlBook) {
         case "EZE":
          urlBook = "EZK"
          break 
         case "MAR":
          urlBook = "MRK"
          break
         case "NAH":
          urlBook = "NAM"
          break  
         case "JOE":
          urlBook = "JOL"
          break  
        case "JOH":
          urlBook = "JHN"
          break
        case "1JO":
          urlBook = "1JN"
          break
        case "2JO":
          urlBook = "2JN"
          break
        case "3JO":
          urlBook = "3JN"
          break
        case "JAM":
          urlBook = "JAS"
          break
        case "JUD":
          urlBook = "JDG"
          break  
        case "SOL":
          urlBook = "SNG"
          break    
        case "PHI":
          urlBook = "PHP"
          break    
        case "PHI":
          urlBook = "PHM"
          break  
        default:
          break
      }
      
      let verse = passage.match(/\d+(?:[:-]\d+)(,\d+)*(?:\s*-\s*\d+)?/g)
      if (verse == null) {
        return passage
      } 
      
      let urlVerse = verse[0].replace(/[:]/g,".")
      return '<a href="https://bible.com/bible/111/' + urlBook + '.' + urlVerse + '" >' + passage + '</a>'
    })
    return test
  }
}
