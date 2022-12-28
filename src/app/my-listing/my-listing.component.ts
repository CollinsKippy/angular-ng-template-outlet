import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-my-listing',
  templateUrl: './my-listing.component.html',
  styleUrls: ['./my-listing.component.css'],
})
export class MyListingComponent implements OnInit {
  @Input() items: any[];
  @ContentChild('myOutletRef') myOutletRef: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
