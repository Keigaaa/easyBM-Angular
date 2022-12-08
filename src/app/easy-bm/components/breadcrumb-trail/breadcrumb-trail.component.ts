import { Component } from '@angular/core';
import { PathService } from '../../services/path.service';


@Component({
  selector: 'ns-breadcrumb-trail',
  templateUrl: './breadcrumb-trail.component.html',
  styleUrls: ['./breadcrumb-trail.component.css']
})
export class BreadcrumbTrailComponent {

  constructor(public pathService: PathService) {

  }
}


