import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  @Output() eventData = new EventEmitter<string>();
  sendData(){
   this.eventData.emit('Sending Data From Child to parent');
  }
}
