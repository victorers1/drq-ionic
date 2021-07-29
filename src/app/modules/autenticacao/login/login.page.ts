import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DRQRoutes } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  routes = new DRQRoutes();

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
    isPessoaFisica: new FormControl(null),
  });

  constructor(protected navCtrl: NavController, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  doLogin() {
    console.log(`email: `, this.loginForm.get('email').value);
    console.log(`password: `, this.loginForm.get('password').value);

    const rota = this.loginForm.get('isPessoaFisica').value ? this.routes.PESSOA_FISICA : this.routes.PESSOA_JURIDICA;

    this.navCtrl.navigateRoot(`/${rota}`);
  }
}
