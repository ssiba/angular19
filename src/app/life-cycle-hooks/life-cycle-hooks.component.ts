import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  imports: [],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})
export class LifeCycleHooksComponent {
  @Input() title = '';
  name = '';
constructor(){
  console.log('constructor called');
}
ngOnInit(){
  console.log('ngoninit called');
}
ngOnChanges(change:OnChanges){
  console.log('ngOnChange Called')
  console.log(change);
  
}
ngDoCheck(){
  console.log('ngDoCheck is fired');
}
/* 
constructor:
The constructor is a built-in method in TypeScript. It is the first method that gets executed when a componet is load

ngOnChanges is a lifecycle hook that is called after the constructor. It is triggered whenever the value of an input property changes.

ngOnInit: we want to initilize the value, featching data, state up state etc..

ngDoCheck : During every change detaion it will run, if you change something on the specefic cpmponet it will run

ngAfterContentInit: Once after content (ng-content) projected into the component is initialized

ngAfterContentChecked: After every check of the component's.

ngAfterViewInit: Once after the component’s views (and its children's) are initialized

ngAfterViewChecked: After every check of the component’s views and child views

ngOnDestory: cieanUp, unsubscribe the obserable 


*/
}
