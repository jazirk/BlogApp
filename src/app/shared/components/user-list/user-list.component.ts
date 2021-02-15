import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() dataSource;
  @Input() dataColumns;
  @Input() isLoading;
  @Output() applyFilter = new EventEmitter();
  @Output() rowClickEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  applyFilters(event: Event) {
    this.applyFilter.emit(event);
  }

  rowClick(data) {
    this.rowClickEmitter.emit(data.id);
  }

}
