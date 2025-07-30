import { Component } from '@angular/core';
import { PanelComponent } from './panel/panel.component';
import { CommonModule } from '@angular/common';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

@Component({
  selector: 'app-root',
  imports: [PanelComponent,CommonModule,LifeCycleHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19';
  recivedChildData = '';
  reciveData(value:string){
    this.recivedChildData = value;
  }
  changingTitle(){
    this.title = 'randomString' + Math.random();
  }
}
