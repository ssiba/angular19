import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Counter App';
  counter = 0;
  handleCount(val: string) {
    if (val === 'plus') {
      this.counter = this.counter + 1;
    } else if (val === 'min') {
      if (this.counter > 0) {
        this.counter = this.counter - 1;
      }
    } else {
      this.counter = 0;
    }
  }

}
