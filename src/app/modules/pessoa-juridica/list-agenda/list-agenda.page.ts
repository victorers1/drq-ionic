import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-agenda',
  templateUrl: './list-agenda.page.html',
  styleUrls: ['./list-agenda.page.scss'],
})
export class ListAgendaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSearchBarChange(event: Event) {
    console.log(`event:`, event);

  }

}
