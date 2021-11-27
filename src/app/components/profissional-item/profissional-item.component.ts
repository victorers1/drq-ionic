import { Component, Input, OnInit } from '@angular/core';
import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';

@Component({
  selector: 'profissional-item',
  templateUrl: './profissional-item.component.html',
  styleUrls: ['./profissional-item.component.scss'],
})
export class ProfissionalItemComponent implements OnInit {
  @Input() profissional: Profissional;
  constructor() {}

  ngOnInit() {
    console.log('ProfissionalItemComponent:', {
      profissional: this.profissional,
    });
  }
}
