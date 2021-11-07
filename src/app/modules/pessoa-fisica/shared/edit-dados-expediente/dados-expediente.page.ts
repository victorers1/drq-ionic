import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dados-expediente',
  templateUrl: './dados-expediente.page.html',
  styleUrls: ['./dados-expediente.page.scss'],
})
export class DadosExpedientePage implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log('DadosExpedientePage params: ', params);
    });
  }

  ngOnInit() {
  }

}
