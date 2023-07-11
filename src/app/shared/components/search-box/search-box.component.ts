import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})

export class SearchBoxComponent implements OnInit {

  private debounce: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = 'Buscar...';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public ondebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debounce
      .pipe(
        debounceTime(300)  // 300 milisegundos
      )
      .subscribe( (value) => {
        this.ondebounce.emit(value);
        // console.log('debounce', value);
      }
    );
  }


  onenter(termino: string):void {
    this.onValue.emit(termino);
  }

  onkeypress (searchterm: string): void {
    this.debounce.next(searchterm);
  }

}
