import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    isPessoaFisica: new FormControl(null),
  });

  constructor(
    protected navCtrl: NavController,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  doLogin() {
    console.log(`loginForm: `, {
      login: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    });

    this.navCtrl.navigateForward([this.routes.SELECT_TIPO_USUARIO], {
      relativeTo: this.route,
    });
  }
}
