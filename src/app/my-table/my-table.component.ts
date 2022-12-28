import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
})
export class MyTableComponent implements OnInit {
  @Input() items: any[];
  
  @ContentChild('myTableHeadTemplate') myTableHeadTemplate: TemplateRef<any>;
  @ContentChild('myTableBodyTemplate') myTableBodyTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
