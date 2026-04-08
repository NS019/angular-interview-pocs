import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-a',
  imports: [],
  template: `<h1>Component A</h1>`,
  styles: ['h1{color:blueviolet}'],
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ComponentA {

}
