import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'ns-speed-dial-button',
  templateUrl: './speed-dial-button.component.html',
  styleUrls: ['./speed-dial-button.component.css']
})
export class SpeedDialButtonComponent {
  displayItems() {
    let speedDialButtonItems = document.getElementById("speedDialButtonItemsList");
    speedDialButtonItems?.classList.toggle("displayItems");
  }
}
