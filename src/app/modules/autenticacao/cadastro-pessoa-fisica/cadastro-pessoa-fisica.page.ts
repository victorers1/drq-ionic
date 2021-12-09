import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DRQRoutes } from 'src/app/constants';
import { ApolloService } from 'src/app/services/apollo/apollo-service.service';

@Component({
  selector: 'app-cadastro-pessoa-fisica',
  templateUrl: './cadastro-pessoa-fisica.page.html',
  styleUrls: ['./cadastro-pessoa-fisica.page.scss'],
})
export class CadastroPessoaFisicaPage implements OnInit {
  routes = new DRQRoutes();

  cadastroForm = new FormGroup({
    nome: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    docFiscal: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
  });

  constructor(private apolloService: ApolloService) {}

  ngOnInit() {}

  async criarConta() {
    // const result = await this.apolloService.mutate();
  }
}
