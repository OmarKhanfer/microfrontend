import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.loadHeader();
   // throw new Error('Method not implemented.');
  }
  title = 'shell';

  @ViewChild('headerComponent', { read: ViewContainerRef }) viewHeaderContainer!: ViewContainerRef;
  @ViewChild('footerComponent', { read: ViewContainerRef }) viewFooterContainer!: ViewContainerRef;

  async loadHeader(): Promise<void> {

    const m = await import('MainControlls/Header');
    const ref = this.viewHeaderContainer.createComponent(m.SharedHeaderComponent);
    // const compInstance = ref.instance;
    // compInstance.ngOnInit()
  }
}
