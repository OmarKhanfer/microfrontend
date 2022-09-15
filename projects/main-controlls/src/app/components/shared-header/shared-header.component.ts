import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent implements OnInit {
  showMenu = false;
  onClose: BehaviorSubject<any>;
  refId:any;
  constructor() { 
    this.onClose = new BehaviorSubject<any>(null);
  }
  
  showComponents() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit(): void {
  }

  closeHandler(event:any) {
    debugger;
    this.onClose.next(event);
  }
}
