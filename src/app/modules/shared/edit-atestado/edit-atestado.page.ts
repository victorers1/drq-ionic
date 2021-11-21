import { Component, OnInit } from '@angular/core';
import { TIPO_USUARIO } from 'src/app/constants';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-edit-atestado',
  templateUrl: './edit-atestado.page.html',
  styleUrls: ['./edit-atestado.page.scss'],
})
export class EditAtestadoPage implements OnInit {
  inicio: string;
  fim: string;

  isEditing = false;
  descricao =
    'Atesto que o paciente Victor Emanuel está apto para o cargo de Analista de Sistemas Sênior';

  constructor() {}

  ngOnInit() {}

  onChange(event: Event) {
    console.log(`event:`, event);
  }

  onClickLimpar() {
    this.inicio = null;
    this.fim = null;
  }

  onDownloadButton() {
    console.log('baixando atestado...');
  }

  onEditButton() {
    if (this.isEditing) {
      console.log('saved!');
    }
    this.isEditing = !this.isEditing;
  }

  onCancelEdition = () => (this.isEditing = false);
}
