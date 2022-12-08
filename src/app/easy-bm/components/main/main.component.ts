import { Component } from '@angular/core';
import { PathService } from '../../services/path.service';

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(public pathService: PathService) {
  }

}
