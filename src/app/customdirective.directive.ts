import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(Element: ElementRef) {
  
  console.log(Element);
  
  Element.nativeElement.innerText = "Text is changed by changeText Directive.";
  
  }

}
