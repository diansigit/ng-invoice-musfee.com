import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChild, OnChanges } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

export class Page {
  size = 0;
  totalElements = 0;
  totalPages = 0;
  pageNumber = 0;
  keyword: string;
}

/**
 * @export
 * @class DataTableComponent
 * @implements {OnInit}
 * @author diansigitp
 */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./data-table.component.scss']
})


export class DataTableComponent implements OnChanges, OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  @Input() serverMode = false;
  @Input() rows: Array<any> = [];
  @Input() temp: Array<any> = [];
  @Input() columns: Array<any> = [];
  @Input() totalRecords = 0;
  @Input() actionColumn = false;
  @Input() actionColumnWidth: number;
  @Input() limitOptions = true;
  @Input() searchOptions = true;

  @Output() deleteClicked = new EventEmitter();
  @Output() detailClicked = new EventEmitter();
  @Output() editClicked = new EventEmitter();
  @Output() limitChanged = new EventEmitter();
  @Output() pageChanged = new EventEmitter();
  @Output() printClicked = new EventEmitter();
  @Output() searchChanged = new EventEmitter();
  @Output() radioChanged = new EventEmitter();
  @Output() switchChanged = new EventEmitter();
  @Output() selectedRow = new EventEmitter();

  showColumnAction = false;
  page = new Page();
  pageSize = 10;
  limitOpts: Array<any> = [
    {
      label: '10',
      value: 10
    },
    {
      label: '25',
      value: 25
    },
    {
      label: '50',
      value: 50
    },
    {
      label: '100',
      value: 100
    }
  ];

  constructor() { }

  ngOnInit() {
    this.page.size = this.pageSize;
    this.pageChange({ offset: 0 });
  }

  ngOnChanges() {
    this.temp = this.rows;
  }

  /**
   * @method deleteClick()
   * @description
   * @author diansigitp
   * @param {any} data
   * @memberof UiiDataTableComponent
   */
  deleteClick(data) {
    this.deleteClicked.emit(data);
  }

  /**
   * @method detailClick()
   * @description
   * @author diansigitp
   * @param {any} data
   * @memberof UiiDataTableComponent
   */
  detailClick(data) {
    this.detailClicked.emit(data);
  }

  /**
   * @method editClick()
   * @description
   * @author diansigitp
   * @param {any} data
   * @memberof UiiDataTableComponent
   */
  editClick(data) {
    this.editClicked.emit(data);
  }

  /**
   * @method getPageStart()
   * @description
   * @author diansigitp
   * @param {Page} page
   * @returns {string}
   * @memberof UiiDataTableComponent
   */
  getPageStart(page: Page): string {
    const start = page.totalElements > 0 ? (page.pageNumber * page.size) + 1 : 0;
    return start.toLocaleString();
  }

  /**
   * @method getPageEnd()
   * @description
   * @author diansigitp
   * @param {Page} page
   * @returns {string}
   * @memberof UiiDataTableComponent
   */
  getPageEnd(page: Page): string {
    let end = (page.pageNumber * page.size) + page.size;
    end = end > page.totalElements ? page.totalElements : end;

    return end.toLocaleString();
  }

  /**
   * @method getTotalCount()
   * @description
   * @author diansigitp
   * @param {Page} page
   * @returns {string}
   * @memberof UiiDataTableComponent
   */
  getTotalCount(page: Page): string {
    return page.totalElements.toLocaleString();
  }

  /**
   * @method limitChange()
   * @description
   * @author diansigitp
   * @param {any} $event
   * @memberof UiiDataTableComponent
   */
  limitChange($event) {
    const limit = Number($event.target.value);
    this.page.size = limit;
    this.limitChanged.emit(this.page);
  }

  /**
   * @method pageChange()
   * @description
   * @author diansigitp
   * @param {any} pageInfo
   * @memberof UiiDataTableComponent
   */
  pageChange(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.pageChanged.emit(this.page);
  }

  printClick(data) {
    this.printClicked.emit(data);
  }

  /**
   * @method radioChange()
   * @description
   * @author diansigitp
   * @param {any} data
   * @memberof UiiDataTableComponent
   */
  radioChange(data) {
    this.radioChanged.emit(data);
  }

  /**
   * @method searchChange()
   * @description
   * @author diansigitp
   * @private
   * @param {any} keyword
   * @memberof UiiDataTableComponent
   */
  searchChange(keyword) {
    this.page.keyword = keyword;
    this.searchChanged.emit(this.page);
  }

  /**
   * @method sort()
   * @description
   * @author diansigitp
   * @private
   * @memberof UiiDataTableComponent
   */
  sort() {
    console.log('on sort');
  }

  /**
   * @method switchChange()
   * @description
   * @author diansigitp
   * @param {any} $event
   * @param {any} data
   * @memberof UiiDataTableComponent
   */
  switchChange($event, data) {
    this.switchChanged.emit({ value: $event, data });
  }

  /**
   * @method updateFilter()
   * @description
   * @author diansigitp
   * @param {any} keyword
   * @memberof UiiDataTableComponent
   */
  updateFilter(keyword) {
    const val = keyword.toLowerCase();
    const columnsFiltered = this.columns;

    // filter our data
    let tempFiltered = [];
    if (!val) {
      tempFiltered = this.temp;
    } else {
      tempFiltered = this.temp.filter(function (item) {
        for (const key in columnsFiltered) {
          if (columnsFiltered.hasOwnProperty(key)) {
            const value = item[columnsFiltered[key].prop];
            if (value !== undefined && value.toLowerCase().includes(keyword.toLowerCase())) {
              return true;
            }
          }
        }
        return false;
      });
    }

    // update the rows
    this.rows = tempFiltered;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  selectClick({ selected }) {
    this.selectedRow.emit(selected);
  }

}
