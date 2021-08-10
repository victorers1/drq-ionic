import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-agenda',
  templateUrl: './list-agenda.page.html',
  styleUrls: ['./list-agenda.page.scss'],
})
export class ListAgendaPage implements OnInit {

  segmentState: string = 'c';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event: Event) {
    console.log(`segmentEvent:`, event);
    this.segmentState = (event as CustomEvent).detail['value'];
  }

  onSearchBarChange(event: Event) {
    console.log(`searchBarEvent:`, event);
  }

}
