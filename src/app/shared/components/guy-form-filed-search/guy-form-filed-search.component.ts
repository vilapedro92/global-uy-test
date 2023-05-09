import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'guy-form-filed-search',
  templateUrl: './guy-form-filed-search.component.html',
  styleUrls: ['./guy-form-filed-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuyFormFiledSearchComponent {

  @Output() keyUP = new EventEmitter<any>();

  applyFilter(event: Event) {
    this.keyUP.emit(event)
  }

}
