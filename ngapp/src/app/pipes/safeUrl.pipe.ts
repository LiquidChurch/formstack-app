import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

 public transform(value: any, type: string): any {
     const sanitizedContent = DOMPurify.sanitize(value);
     return this.sanitizer.bypassSecurityTrustResourceUrl(sanitizedContent);
  }
}
