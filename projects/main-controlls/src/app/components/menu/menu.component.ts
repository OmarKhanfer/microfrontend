import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  list: any[] = [];
  @Output() public onClose = new EventEmitter<any>();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadList().subscribe((data: any) => {
      this.list = data;
    });
  }

  close() {
    debugger;
    this.onClose.emit('close button');
  }
  loadList() {
    return this.http.get('https://api-generator.retool.com/00Grtf/data');
  }

}
