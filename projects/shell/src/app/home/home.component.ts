import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  m: any;
  constructor() { }
  @ViewChild('headerComponent', { read: ViewContainerRef }) viewHeaderContainer!: ViewContainerRef;
  @ViewChild('footerComponent', { read: ViewContainerRef }) viewFooterContainer!: ViewContainerRef;

  ngOnInit(): void {
    this.loadHeader();


  }

  async loadHeader(): Promise<void> {
    try {

      const m = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Header'
      });

      let ref: any;
      if (m) {
        ref = this.viewHeaderContainer.createComponent(m.SharedHeaderComponent);
      }

      ref.instance.onClose.subscribe((val: any) => {
        console.log(val);
        debugger;
      });


      // fetch(`http://localhost:4201/remoteEntry.js`)
      //   .then(res => res.json())
      //   .then(async res => {
      //     
      //   });

    } catch (error) {
      debugger;
    }


    // this.m?.instance.outputEvent.subscribe((val:any) => {
    //   debugger;
    // });
    // const compInstance = ref.instance;
    // compInstance.ngOnInit()
  }
}
