import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'virgin-project';

  buttonClicked() {
    alert('Wat is denn mit dir nich richtich???');
  }
}
