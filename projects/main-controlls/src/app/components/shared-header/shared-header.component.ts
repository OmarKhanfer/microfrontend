import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent implements OnInit {
  showMenu = false;
  constructor() { }
  
  showComponents() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit(): void {
  }

}
